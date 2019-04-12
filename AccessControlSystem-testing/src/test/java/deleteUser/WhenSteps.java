package deleteUser;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import util.Util;


public class WhenSteps {


    @And("^check an user checkbox$")
    public void checkAnUserCheckbox() throws Throwable {
        Thread.sleep(1000);

        Util.getDriver().findElement(By.xpath("(//div[contains(@class,'mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin')])[16]")).click();
        Thread.sleep(1000);
    }

    @And("^click 'Delete' button$")
    public void clickDeleteButton() throws Throwable {

        Util.getDriver().findElement(By.xpath("//span[@class='mat-button-wrapper'][contains(.,'Delete')]")).click();

    }
}
