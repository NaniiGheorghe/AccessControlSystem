package createaNewOfficeRoom;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import static junit.framework.Assert.assertEquals;


public class ThenSteps {


    @Then("^a new user is created$")
    public void aNewUserIsCreated() throws Throwable {

        WebElement successMessage = Util.getDriver().findElement(By.xpath("//h1"));

        String messageText = successMessage.getText();
        String currentURL = Util.getDriver().getCurrentUrl();

        assertEquals("http://webdriveruniversity.com/Contact-Us/contact-form-thank-you.html"
                ,currentURL);

        assertEquals("Thank You for your Message!",messageText);

    }
}
