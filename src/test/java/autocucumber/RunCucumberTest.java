package autocucumber;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/report"},
        glue = "autocucumber.stepdefinitions",
        features = "src/test/resources/autocucumber/calculator.feature"
)
public class RunCucumberTest {
}
