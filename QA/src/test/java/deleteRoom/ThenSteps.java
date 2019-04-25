package deleteRoom;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import util.Util;

import static junit.framework.Assert.assertTrue;


public class ThenSteps {

    @Then("^a room is deleted$")
    public void aRoomIsDeleted() throws Throwable {
        boolean result = false;
        Thread.sleep(1000);

        if (Util.getDriver().findElements(By.xpath("//div[@aria-live='polite'][contains(.,'Room [TestRoom] was removed sucessfully!')]")).size() > 0) {
            result = true;
        }

        assertTrue(result);
    }
}
