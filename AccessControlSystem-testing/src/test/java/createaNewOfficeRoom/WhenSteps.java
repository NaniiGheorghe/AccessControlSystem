package createaNewOfficeRoom;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;


public class WhenSteps {

    @When("I complete all the fields of the Contact Us form")
    public void iCompleteAllTheFieldsOfTheContactUsForm() throws InterruptedException {


    }


    @When("I click the submit button")
    public void iClickTheSubmitButton() throws InterruptedException {


    }


    @When("^I click create button in 'User' overview$")
    public void iClickCreateButtonInUserOverview() throws Throwable {
        WebElement submitButton =
                Util.getDriver().findElement(By.xpath("//input[@type='submit']"));

        submitButton.click();

        Thread.sleep(1000);
    }

    @And("^fill in all fields$")
    public void fillInAllFieldsAndClickOkButton() throws Throwable {

        WebElement firstName = Util.getDriver().findElement(By.name("first_name"));
        firstName.sendKeys("John");

        Thread.sleep(1000);

        WebElement lastName = Util.getDriver().findElement(By.name("last_name"));
        lastName.sendKeys("Wheat");

        Thread.sleep(1000);

        WebElement email = Util.getDriver().findElement(By.name("email"));
        email.sendKeys("johnw@gmail.com");

        Thread.sleep(1000);

        WebElement comments = Util.getDriver().findElement(By.name("message"));
        comments.sendKeys("This is a comment," +
                "This is a comment This is a comment This is a comment This is a comment This is a comment");

        Thread.sleep(1000);
    }

    @And("^click 'Ok' button$")
    public void clickOkButton() throws Throwable {
        WebElement submitButton =
                Util.getDriver().findElement(By.xpath("//input[@type='submit']"));

        submitButton.click();

        Thread.sleep(1000);
    }
}
