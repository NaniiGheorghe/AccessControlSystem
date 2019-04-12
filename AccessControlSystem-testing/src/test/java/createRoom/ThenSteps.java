package createRoom;

import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import util.Util;

import static junit.framework.Assert.assertTrue;


public class ThenSteps {

    @Then("^a new room is created$")
    public void aNewRoomIsCreated() throws Throwable {

        boolean result = false;
        Thread.sleep(1000);

        if (Util.getDriver().findElements(By.xpath("//div[@aria-live='polite'][contains(.,'The combination room [TestRoom] - door [12345] was created sucessfully.')]")).size() > 0) {
            result = true;
        }

        assertTrue(result);
    }
}
