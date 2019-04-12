package deleteRoom;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import org.openqa.selenium.By;
import util.Util;


public class WhenSteps {

    @And("^check a room checkbox$")
    public void checkARoomCheckbox() throws Throwable {
        Thread.sleep(1000);
        Util.getDriver().findElement(By.xpath("(//div[contains(@class,'mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin')])[17]")).click();
        Thread.sleep(1000);
    }
}
