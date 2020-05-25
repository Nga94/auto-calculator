$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/autocucumber/calculator.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "\u003coperator\u003e two numbers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open page desmos.com",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter the number one \u003cnumberOne\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Enter the operator \u003coperator\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the number two \u003cnumberTwo\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "the result should be \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "numberOne",
        "operator",
        "numberTwo",
        "result"
      ]
    },
    {
      "cells": [
        "99",
        "+",
        "9",
        "108"
      ]
    },
    {
      "cells": [
        "9",
        "-",
        "6",
        "3"
      ]
    },
    {
      "cells": [
        "8",
        "*",
        "2",
        "16"
      ]
    },
    {
      "cells": [
        "7",
        "/",
        "2",
        "3.5"
      ]
    }
  ]
});
formatter.scenario({
  "name": "+ two numbers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Open page desmos.com",
  "keyword": "Given "
});
formatter.match({
  "location": "autocucumber.stepdefinitions.CalculateDefinitions.open_page_desmos_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the number one 99",
  "keyword": "When "
});
formatter.match({
  "location": "autocucumber.stepdefinitions.CalculateDefinitions.enter_the_number_one(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the operator +",
  "keyword": "And "
});
formatter.match({
  "location": "autocucumber.stepdefinitions.CalculateDefinitions.enter_the_operator(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the number two 9",
  "keyword": "And "
});
formatter.match({
  "location": "autocucumber.stepdefinitions.CalculateDefinitions.enter_the_number_two(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the result should be 108",
  "keyword": "Then "
});
formatter.match({
  "location": "autocucumber.stepdefinitions.CalculateDefinitions.the_result_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "- two numbers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Open page desmos.com",
  "keyword": "Given "
});
formatter.match({
  "location": "autocucumber.stepdefinitions.CalculateDefinitions.open_page_desmos_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the number one 9",
  "keyword": "When "
});
formatter.match({
  "location": "autocucumber.stepdefinitions.CalculateDefinitions.enter_the_number_one(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the operator -",
  "keyword": "And "
});
formatter.match({
  "location": "autocucumber.stepdefinitions.CalculateDefinitions.enter_the_operator(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the number two 6",
  "keyword": "And "
});
formatter.match({
  "location": "autocucumber.stepdefinitions.CalculateDefinitions.enter_the_number_two(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the result should be 3",
  "keyword": "Then "
});
formatter.match({
  "location": "autocucumber.stepdefinitions.CalculateDefinitions.the_result_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "* two numbers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Open page desmos.com",
  "keyword": "Given "
});
formatter.match({
  "location": "autocucumber.stepdefinitions.CalculateDefinitions.open_page_desmos_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the number one 8",
  "keyword": "When "
});
formatter.match({
  "location": "autocucumber.stepdefinitions.CalculateDefinitions.enter_the_number_one(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the operator *",
  "keyword": "And "
});
formatter.match({
  "location": "autocucumber.stepdefinitions.CalculateDefinitions.enter_the_operator(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the number two 2",
  "keyword": "And "
});
formatter.match({
  "location": "autocucumber.stepdefinitions.CalculateDefinitions.enter_the_number_two(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the result should be 16",
  "keyword": "Then "
});
formatter.match({
  "location": "autocucumber.stepdefinitions.CalculateDefinitions.the_result_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "/ two numbers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Open page desmos.com",
  "keyword": "Given "
});
formatter.match({
  "location": "autocucumber.stepdefinitions.CalculateDefinitions.open_page_desmos_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the number one 7",
  "keyword": "When "
});
formatter.match({
  "location": "autocucumber.stepdefinitions.CalculateDefinitions.enter_the_number_one(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the operator /",
  "keyword": "And "
});
formatter.match({
  "location": "autocucumber.stepdefinitions.CalculateDefinitions.enter_the_operator(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the number two 2",
  "keyword": "And "
});
formatter.match({
  "location": "autocucumber.stepdefinitions.CalculateDefinitions.enter_the_number_two(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the result should be 3.5",
  "keyword": "Then "
});
formatter.match({
  "location": "autocucumber.stepdefinitions.CalculateDefinitions.the_result_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});