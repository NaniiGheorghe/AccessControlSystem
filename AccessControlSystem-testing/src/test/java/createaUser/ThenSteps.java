package createaUser;

import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import util.Util;

import static junit.framework.Assert.assertEquals;
import static junit.framework.Assert.assertTrue;


public class ThenSteps {


    @Then("^a new user is created$")
    public void aNewUserIsCreated() throws Throwable {
        boolean result = false;
        Thread.sleep(1000);

        if (Util.getDriver().findElements(By.xpath("//div[@aria-live='polite'][contains(.,'A new user was created successfully')]")).size() > 0) {
            result = true;
        }

        assertTrue(result);

    }

}
