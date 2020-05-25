Feature:
  Scenario Outline: <operator> two numbers
    Given Open page desmos.com
    When Enter the number one <numberOne>
    And Enter the operator <operator>
    And Enter the number two <numberTwo>
    Then the result should be <result>
    Examples:
      | numberOne | operator | numberTwo | result  |
      | 99        | +        | 9         | 108     |
      | 9         | -        | 6         | 3       |
      | 8         | *        | 2         | 16      |
      | 7         | /        | 2         | 3.5     |
