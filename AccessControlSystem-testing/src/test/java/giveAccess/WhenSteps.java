package giveAccess;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import util.Util;


public class WhenSteps {

    @When("^Open 'Access Manegement' overview$")
    public void openAccessManegementOverview() throws Throwable {
        Util.getDriver().findElement(By.xpath("//div[@class='mat-button-toggle-label-content'][contains(.,'Access Management')]")).click();
        Thread.sleep(1000);
    }

    @And("^fill in all fields in 'Give access' from$")
    public void fillInAllFieldsInGiveAccessFrom() throws Throwable {

        Util.getDriver().findElement(By.id("selectUser")).click();
        Thread.sleep(1000);

        Util.getDriver().findElement(By.xpath("//span[contains(.,'Nicolaie Sarbu')]")).click();
        Thread.sleep(1000);


        Util.getDriver().findElement(By.id("selectRoom")).click();
        Thread.sleep(1000);

        Util.getDriver().findElement(By.xpath("//span[contains(.,'Service office room')]")).click();
        Thread.sleep(1000);


        Util.getDriver().findElement(By.id("selectDoor")).click();
        Thread.sleep(1000);

        Util.getDriver().findElement(By.xpath("//span[contains(.,'Door 2')]")).click();
        Thread.sleep(1000);


    }

    @And("^click 'Create' button in 'Access Manegement' overview$")
    public void clickCreateButtonInAccessManegementOverview() throws Throwable {
        Util.getDriver().findElement(By.xpath("(//span[@class='mat-button-wrapper'][contains(.,'Create')])[1]")).click();
        Thread.sleep(1000);

    }


}
