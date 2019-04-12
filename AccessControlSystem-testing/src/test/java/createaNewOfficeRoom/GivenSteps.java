package createaNewOfficeRoom;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.ArrayList;


public class GivenSteps {

    @Given("^the web interface is started$")
    public void theWebInterfaceIsStarted() throws Throwable {

        Util.getDriver().get("http://webdriveruniversity.com");

        WebElement contactUsLink = Util.getDriver().
                findElement(By.xpath("//a[@id='contact-us']/div[contains(@class, 'thumbnail')]" +
                        "/div[contains(@class, 'section-title')]/h1"));

        contactUsLink.click();

        Thread.sleep(1000);

        ArrayList<String> tabs = new ArrayList<>();
        tabs.addAll(Util.getDriver().getWindowHandles());
        Util.getDriver().switchTo().window(tabs.get(1));
    }
}
