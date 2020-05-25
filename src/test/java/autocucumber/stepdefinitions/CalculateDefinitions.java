package autocucumber.stepdefinitions;

import autocucumber.DriverManager;
import autocucumber.pageobjects.CalculatorPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import java.util.concurrent.TimeUnit;

public class CalculateDefinitions {
    CalculatorPage calculatorPage;
    WebDriver driver;

    public CalculateDefinitions() {
        driver = DriverManager.getDriver();
    }

    @Given("Open page desmos.com")
    public void open_page_desmos_com() {
        calculatorPage = new CalculatorPage(driver);
    }

    @When("^Enter the number one (.*)$")
    public void enter_the_number_one(String numberOne) {
        for (int i = 0; i < numberOne.length(); i++) {
            calculatorPage.enterElement(String.valueOf(numberOne.charAt(i)));
        }
    }

    @And("^Enter the operator (.*)$")
    public void enter_the_operator(String operator) {
        calculatorPage.enterElement(operator);
    }

    @And("^Enter the number two (.*)$")
    public void enter_the_number_two(String numberTwo) {
        for (int i = 0; i < numberTwo.length(); i++) {
            calculatorPage.enterElement(String.valueOf(numberTwo.charAt(i)));
        }
    }

    @Then("^the result should be (.*)$")
    public void the_result_should_be(String result) {
        String expected = calculatorPage.getResult();
        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        Assert.assertEquals(expected, result);
    }
}
