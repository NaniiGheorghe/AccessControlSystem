package createRoom;

import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import util.Util;


public class WhenSteps {

    @When("^Open 'Room' overview$")
    public void openRoomOverview() throws Throwable {
        Util.getDriver().findElement(By.xpath("//div[@class='mat-button-toggle-label-content'][contains(.,'Rooms')]")).click();
    }

    @And("^click 'Ok' button from$")
    public void clickOkButtonOnCreateRoomFrom() throws Throwable {
        Util.getDriver().findElement(By.xpath("//span[@class='mat-button-wrapper'][contains(.,'Ok')]")).click();
    }

    @And("^fill in all fields in CreateRoom from$")
    public void fillInAllFieldsInCreateRoomFrom() throws Throwable {
        Thread.sleep(1000);

        WebElement room = Util.getDriver().findElement(By.xpath("//input[contains(@placeholder,'Room name')]"));
        room.sendKeys("TestRoom");

        WebElement lastName = Util.getDriver().findElement(By.xpath("//input[contains(@placeholder,'Door identifier')]"));
        lastName.sendKeys("12345");

        Thread.sleep(1000);
    }

    @And("^click 'Create' button in Room overview$")
    public void clickCreateButtonInRoomOverview() throws Throwable {
        Util.getDriver().findElement(By.xpath("(//span[@class='mat-button-wrapper'][contains(.,'Create')])[3]")).click();
    }
}
