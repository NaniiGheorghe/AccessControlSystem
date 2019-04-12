package createaUser;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import util.Util;
import util.UtilKey;

import java.util.concurrent.TimeUnit;


public class GivenSteps {

    @Given("^the web interface is started$")
    public void theWebInterfaceIsStarted() throws Throwable {

        Util.getDriver().get("http://localhost:4200/");
        Util.getDriver().manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
    }

    @And("^user is logged in as an administrator$")
    public void userIsLoggedInAsAnAdministrator() throws Throwable {

        if (Util.getDriver().findElements(By.id("usernameLoginInput")).size() > 0 ||
                Util.getDriver().findElements(By.id("passwordLoginInput")).size() > 0 ||
                Util.getDriver().findElements(By.id("loginButtonLoginPage")).size() > 0) {

            WebElement usernameLoginInput = Util.getDriver().findElement(By.id("usernameLoginInput"));
            WebElement passwordLoginInput = Util.getDriver().findElement(By.id("passwordLoginInput"));
            WebElement loginButtonLoginPage = Util.getDriver().findElement(By.id("loginButtonLoginPage"));

            usernameLoginInput.sendKeys(UtilKey.ADMIN_USERNAME);
            passwordLoginInput.sendKeys(UtilKey.ADMIN_PASS);
            loginButtonLoginPage.click();
        }

        Thread.sleep(1000);

    }
}
