package deleteUser;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import util.Util;

import static junit.framework.Assert.assertTrue;


public class ThenSteps {


    @Then("^a user is deleted$")
    public void aUserIsDeleted() throws Throwable {
        boolean result = false;
        Thread.sleep(1000);

        if (Util.getDriver().findElements(By.xpath("(//div[contains(.,'User [John Wheat] was removed successfully!')])[3]")).size() > 0) {
            result = true;
        }

        assertTrue(result);

    }

}
