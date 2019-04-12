int pin = 12;

void setup() {
  pinMode(pin, OUTPUT);
}

void loop() {
    digitalWrite(pin,LOW);
  delay(100);
  digitalWrite(pin,HIGH);
}
