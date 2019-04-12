package createaNewOfficeRoom;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Util {


   private static WebDriver driver;

    //Actions done before each Scenario(test)
    @Before
    public static void setDriver(){

        System.setProperty("webdriver.chrome.driver", "src/test/resources/drivers/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();

    }


    public static WebDriver getDriver(){

        return driver;

    }

    //Actions done after each Scenario(test)
    @After
    public void quitDriver(){

        driver.quit();

    }




}
