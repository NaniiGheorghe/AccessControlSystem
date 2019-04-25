package giveAccess;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import util.Util;

import static junit.framework.Assert.assertTrue;


public class ThenSteps {

    @Then("^a new access is created$")
    public void aNewAccessIsCreated() throws Throwable {
        boolean result = false;
        Thread.sleep(1000);

        if (Util.getDriver().findElements(By.xpath("//div[@aria-live='polite'][contains(.,'Access registered successfully for user [Nicolaie Sarbu] to room [Service office room], door [Door 2]')]")).size() > 0) {
            result = true;
        }

        assertTrue(result);
    }
}
