package createaUser;

import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import util.Util;


public class WhenSteps {

    @When("^Open 'User' overview$")
    public void iClickCreateButtonInUserOverview() throws Throwable {
        Thread.sleep(1000);

        WebElement userMenuButton = Util.getDriver().findElement(By.id("userMenuButton"));

        Thread.sleep(1000);

        userMenuButton.click();


    }

    @And("^click 'Create' button$")
    public void clickCreate() throws InterruptedException {
        Thread.sleep(1000);
        WebElement userCreateButton = Util.getDriver().findElement(By.id("userCreateButton"));

        userCreateButton.click();
        Thread.sleep(1000);


    }

    @And("^fill in all fields$")
    public void fillInAllFieldsAndClickOkButton() throws Throwable {

        fillInUserData();

        fillInUsernameAndPass();

        selectKeyType();

        enterKeyData();

    }


    private void fillInUserData() throws InterruptedException {
        WebElement firstName = Util.getDriver().findElement(By.id("createUserFirstNameInput"));
        firstName.sendKeys("John");

        WebElement lastName = Util.getDriver().findElement(By.id("createUserLastNameInput"));
        lastName.sendKeys("Wheat");

        WebElement department = Util.getDriver().findElement(By.id("createUserDepartmentInput"));
        department.sendKeys("Service");

        WebElement position = Util.getDriver().findElement(By.id("createUserPositionInput"));
        position.sendKeys("Developer");

        Util.getDriver().findElement(By.id("createUserRoleDropDown")).click();
        Thread.sleep(1000);
        Util.getDriver().findElement(By.xpath("//span[@class='mat-option-text'][contains(.,'Operator')]")).click();

        Util.getDriver().findElement(By.id("createUserRoomDropDown")).click();
        Thread.sleep(1000);
        Util.getDriver().findElement(By.xpath("//span[contains(.,'Relax room')]")).click();

        WebElement submitButton = Util.getDriver().findElement(By.id("createUserOkButton"));
        submitButton.click();
        Thread.sleep(1000);

    }


    private void fillInUsernameAndPass() throws InterruptedException {
        WebElement firstName = Util.getDriver().findElement(By.id("createUserUsernameInput"));
        firstName.sendKeys("gnanii");

        WebElement lastName = Util.getDriver().findElement(By.id("createUserPassInput"));
        lastName.sendKeys("12345");

        WebElement department = Util.getDriver().findElement(By.id("createUserConfPassInput"));
        department.sendKeys("12345");

        Util.getDriver().findElement(By.id("createUserConfPassButton")).click();

        Thread.sleep(1000);
    }

    private void selectKeyType() throws InterruptedException {

        Util.getDriver().findElement(By.id("createUserSelectKeyType")).click();
        Thread.sleep(1000);
        Util.getDriver().findElement(By.xpath("//span[@class='mat-option-text'][contains(.,'NFC Key')]")).click();
        Thread.sleep(1000);

    }


    private void enterKeyData() throws InterruptedException {

        WebElement firstName = Util.getDriver().findElement(By.id("createUserNFCkeyInput"));
        firstName.sendKeys("1111111");

        WebElement ss = Util.getDriver().findElement(By.id("createUserKeyNameInput"));
        ss.sendKeys("TestName");

    }


    @And("^click 'Ok' button on CreateUser from$")
    public void clickOkButton() throws Throwable {
        Thread.sleep(1000);

        Util.getDriver().findElement(By.id("createUserOkButton")).click();
        Thread.sleep(2000);

    }


}
