package autocucumber.pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class CalculatorPage {

    @FindAll(
         @FindBy(css = "div.dcg-exp-output-container span.dcg-mq-root-block span")
    )
    public List<WebElement> txtResultElements;
    public WebDriver driver;

    public String getResult() {
        String result = "";
        for (int i = 1; i < txtResultElements.size() ; i++) {
            result += txtResultElements.get(i).getText();
        }
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        return result;
    }

    public void enterElement(String element) {
        // Get locator element
        String att = "span[role='button'][dcg-command='" + element + "']";
        WebElement button = driver.findElement(By.cssSelector(att));
        button.click();
    }

    public CalculatorPage(WebDriver driver) {
        this.driver = driver;
        this.driver.get("https://www.desmos.com/scientific");
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        PageFactory.initElements(this.driver, this);
    }
}
