

#include <SPI.h>
#include <Ethernet.h>
#include <Adafruit_Fingerprint.h>


byte mac[] = {
  0x90, 0xA2, 0xDA, 0x10, 0x1E, 0x51
};
IPAddress ip(192, 168, 100, 23);
IPAddress server(192, 168, 100, 193);
//IPAddress server(35, 222, 23, 193);

EthernetClient client;

SoftwareSerial mySerial(2, 3);
Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial);
int greenLedPin = 4;
int redLedPin = 5;
int blueLedPin = 6;
int doorLockPin = 8;

int socketStatus;
int fingerStatus;

/* States:
    1 - Read data from finger and send to server and open door
    2 - Read data from finger and send to server for registartion
*/
int state = 1;
uint8_t fingerId;
long fingerIdLong;




void setup() {
  socketStatus = initializeSocketConnection();
  fingerStatus = initializeFingerScanner();
}

void loop() {

  if (socketStatus == 1 && fingerStatus == 1) {
    if (state == 1) {
      loopState1();
    } else if (state == 2) {
      loopState2();
    }
  } else {
    if (socketStatus == -1) {
      socketStatus = initializeSocketConnection();
    } else if (fingerStatus == -1) {
      fingerStatus = initializeFingerScanner();
    } else {
      Serial.print("Something went wrong!");
    }
  }

  checkServerConnection();
}

int initializeSocketConnection() {
  // start the Ethernet connection:
  Ethernet.begin(mac, ip);
  // Open serial communications and wait for port to open:
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }
  // Check for Ethernet hardware present
  if (Ethernet.hardwareStatus() == EthernetNoHardware) {
    Serial.println("Ethernet shield was not found.  Sorry, can't run without hardware. :(");
    return -1;
  }
  while (Ethernet.linkStatus() == LinkOFF) {
    Serial.println("Ethernet cable is not connected.");
    return -1;
  }

  delay(1000);
  Serial.println("connecting...");

  // if you get a connection, report back via serial:
  if (client.connect(server, 2002)) {
    Serial.println("connected");
  } else {
    return -1;
  }

  delay(1000);
  String ack = getNextMessageFromSocket();

  if (ack = "CNE") {
    Serial.println("Server confirmation received!");
    return 1;
  } else {
    return -1;
  }
}


int initializeFingerScanner() {
  Serial.begin(9600);
  while (!Serial);  // For Yun/Leo/Micro/Zero/...
  delay(100);
  Serial.println("\n\nAdafruit finger detect test");
  // set the data rate for the sensor serial port
  finger.begin(57600);
  if (finger.verifyPassword()) {
    Serial.println("Found fingerprint sensor!");
  } else {
    Serial.println("Did not find fingerprint sensor :(");
    return -1;
  }
  finger.getTemplateCount();
  Serial.print("Sensor contains ");
  Serial.print(finger.templateCount);
  Serial.println(" templates");
  pinMode(doorLockPin, OUTPUT);

  return 1;
}

void checkServerConnection() {
  // if the server's disconnected, stop the client:
  if (!client.connected()) {
    Serial.println();
    Serial.println("disconnecting.");
    client.stop();
    socketStatus = -1;
  }
}

void loopState1() {
  handleFingerScan();
  handleNextSocketMessage();
  delay(100);
}

void handleFingerScan() {
  digitalWrite(redLedPin, LOW);
  digitalWrite(greenLedPin, LOW);
  digitalWrite(blueLedPin, HIGH);
  digitalWrite(doorLockPin, LOW);

  int fingerId = getFingerprintIDez();


  if (fingerId != -1) {
    Serial.print("Found id ");
    Serial.println(fingerId);
    String message = getScanProtocolMessage(fingerId);
    Serial.println(message);
    client.println(message);
  }

}


String getScanProtocolMessage(int fingerId) {
  String fingetIdValue = String(fingerId);
  int n = 10 - fingetIdValue.length();
  for (int i = 0; i < n; i++ ) {
    fingetIdValue += " ";
  }
  return "SC" + String("SC0001    ") + fingetIdValue + "FIN";
}


void handleNextSocketMessage() {
  String message = getNextMessageFromSocket();
  if (message != "") {
    Serial.println(message);
    String identifier = message.substring(0, 3);

    if (identifier == "AKN") {
      digitalWrite(redLedPin, LOW);
      digitalWrite(greenLedPin, HIGH);
      digitalWrite(blueLedPin, LOW);
      digitalWrite(doorLockPin, HIGH);
      delay(1000);
      Serial.println("Door opened!");

    } else if (identifier == "SFR") {
      String scanner = message.substring(3, 13);
      Serial.println(scanner);

      String nextId = message.substring(13, 23);
      nextId.trim();
      fingerId = (uint8_t)nextId.toInt();
      fingerIdLong = nextId.toInt();
      Serial.println(fingerId);
      state = 2;
    } else if (identifier == "SFS") {
      Serial.println("Swith state back to 1");
      state = 1;
    } else if (identifier == "CFR") {
      String nextId = message.substring(3, 6);
      nextId.trim();
      fingerIdLong = nextId.toInt();
      fingerId = (uint8_t)nextId.toInt();
      Serial.println(fingerId);
      state = 2;
    }  else if (identifier == "RJE") {
      digitalWrite(redLedPin, HIGH);
      digitalWrite(blueLedPin, LOW);
      digitalWrite(greenLedPin, LOW);
      delay(1000);
    }

  }
}


String getNextMessageFromSocket() {
  String message = "";
  if (client.available()) {
    char c;
    do {
      c = client.read();
      if (c != -1) {
        message += c;
      }
    } while (c != -1);
  }
  return message;
}


void loopState2() {
  delay(500);
  Serial.print("Enrolling ID #");
  Serial.println(fingerId);
  uint8_t storedId = getFingerprintEnroll(fingerId);
  Serial.println(storedId);
  Serial.println(fingerId);

  if (storedId == fingerId) {

    String message = "FR" + String(fingerIdLong);
    Serial.println(message);
    client.println(message);
  }
  delay(100);
  handleNextSocketMessage();

  delay(1000);
  handleNextSocketMessage();
}

uint8_t getFingerprintEnroll(uint8_t id) {
  int p = -1;
  Serial.print("Waiting for valid finger to enroll as #"); Serial.println(id);
  while (p != FINGERPRINT_OK) {
    handleNextSocketMessage();
    p = finger.getImage();
    switch (p) {
      case FINGERPRINT_OK:
        Serial.println("Image taken");
        break;
      case FINGERPRINT_NOFINGER:
        Serial.print(".");
        break;
      case FINGERPRINT_PACKETRECIEVEERR:
        Serial.println("Communication error");
        break;
      case FINGERPRINT_IMAGEFAIL:
        Serial.println("Imaging error");
        break;
      default:
        Serial.println("Unknown error");
        break;
    }
    if (state == 1) {
      return 0;
    }
  }


  // OK success!

  p = finger.image2Tz(1);
  switch (p) {
    case FINGERPRINT_OK:
      Serial.println("Image converted");
      break;
    case FINGERPRINT_IMAGEMESS:
      Serial.println("Image too messy");
      return p;
    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println("Communication error");
      return p;
    case FINGERPRINT_FEATUREFAIL:
      Serial.println("Could not find fingerprint features");
      return p;
    case FINGERPRINT_INVALIDIMAGE:
      Serial.println("Could not find fingerprint features");
      return p;
    default:
      Serial.println("Unknown error");
      return p;
  }

  p = finger.image2Tz(2);

  // OK converted!
  Serial.print("Creating model for #");  Serial.println(id);
  p = finger.createModel();

  Serial.print("ID "); Serial.println(id);
  p = finger.storeModel(id);
  if (p == FINGERPRINT_OK) {
    Serial.println("Stored!");
    return id;
  } else if (p == FINGERPRINT_PACKETRECIEVEERR) {
    Serial.println("Communication error");
    return p;
  } else if (p == FINGERPRINT_BADLOCATION) {
    Serial.println("Hellooolo!");
    return id;
  } else if (p == FINGERPRINT_FLASHERR) {
    Serial.println("Error writing to flash");
    return p;
  } else {
    Serial.println("Unknown error");
    return p;
  }
} // returns -1 if failed, otherwise returns ID #

int getFingerprintIDez() {
  uint8_t p = finger.getImage();
  if (p != FINGERPRINT_OK)  {
    return -1;
  }    p = finger.image2Tz();   if (p != FINGERPRINT_OK) {
    return -1;
  }    p = finger.fingerFastSearch();
  if (p != FINGERPRINT_OK) {
    Serial.println("Finge print was not found!");
    digitalWrite(redLedPin, HIGH);
    digitalWrite(blueLedPin, LOW);
    digitalWrite(greenLedPin, LOW);
    delay(1000);
    return -1;
  }
  Serial.print("Found ID #");
  Serial.print(finger.fingerID);
  Serial.print(" with confidence of ");
  Serial.println(finger.confidence);
  return finger.fingerID;
}


int getNextRandroidFinderId() {
  long id = random(100, 99999999);

}
