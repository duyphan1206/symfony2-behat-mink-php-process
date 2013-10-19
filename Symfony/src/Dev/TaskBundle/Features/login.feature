Feature: Behat Login to the demo area
  As an administrator
  I want to test login access to Demo
  So I can access restricted area

  @javascript
  Scenario: check login form
    Given I am on "/demo/secured/login"
    Then I should be on "/demo/secured/login"
    And the response should contain "Login"

  @javascript
  Scenario: fill login form
    Given I am on "/demo/secured/login"
    When I fill in "username" with "admin"
    And I fill in "password" with "adminpass"
    And I press "Login"
    Then I should see "Welcome the new website!"

  @javascript
  Scenario: Unexisting user cannot access demo secured area
    Given I am on "/demo/secured/login"
    When I fill in "username" with "fakeuser"
    And I fill in "password" with "adminpass"
    And I press "Login"
    Then I should see "Bad credentials"

  @javascript
  Scenario: Existing user with bad password cannot access demo secured area
    Given I am on "/demo/secured/login"
    When I fill in "username" with "admin"
    And I fill in "password" with "fakepass"
    And I press "Login"
    Then I should see "Bad credentials"

  @javascript
  Scenario Outline: Failed logins due to missing/invalid details
    Given I am on "/demo/secured/login"
    When I fill in "username" with "<admin>"    
    And I fill in "password" with "<password>"
    And I press "Login"
    Then I should see "Bad credentials"    
  Examples:
    | username                  | password         | explanation    |
    |                           |                  | nothing        |
    |                           | adminpass        | missing username  |
    | admin                     |                  | missing password |
    | admin123                  | adminpass        | invalid username  |
    | admin                     | fakepass         | wrong password |