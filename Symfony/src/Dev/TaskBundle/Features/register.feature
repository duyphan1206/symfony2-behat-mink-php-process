# features/register.feature
Feature: Register
  In order to member of website
  As a user
  I need register account 

  @javascript
  Scenario: Registering account successful
    Given I am on register page    
    When I fill in "inputEmail" with "duy.phan@asnet.com.vn"
    When I fill in "inputPassword" with "duy"
    When I fill in "inputPasswordReType" with "duy"
    And I press "Register"
    Then I should see "successfully register"

  @javascript
  Scenario: Registering account fail with all empty value
    Given I am on register page
    When I fill in "inputEmail" with ""
    When I fill in "inputPassword" with ""
    When I fill in "inputPasswordReType" with ""
    And I press "Register"
    Then I should see "Fail register"

  @javascript
  Scenario: Registering account fail with email empty value
    Given I am on register page    
    When I fill in "inputEmail" with ""
    When I fill in "inputPassword" with "duy"
    When I fill in "inputPasswordReType" with "duy"
    And I press "Register"
    Then I should see "Fail register"

  @javascript
  Scenario: Registering account fail with pass empty value
    Given I am on register page    
    When I fill in "inputEmail" with "duy.phan@asnet.com.vn"
    When I fill in "inputPassword" with ""
    When I fill in "inputPasswordReType" with "duy"
    And I press "Register"
    Then I should see "Fail register"

  @javascript
  Scenario: Registering account fail with pass empty value
    Given I am on register page    
    When I fill in "inputEmail" with "duy.phan@asnet.com.vn"
    When I fill in "inputPassword" with "duy"
    When I fill in "inputPasswordReType" with ""
    And I press "Register"
    Then I should see "Fail register"

  @javascript
  Scenario: Registering account fail with pass and retype pass not match
    Given I am on register page    
    When I fill in "inputEmail" with "duy.phan@asnet.com.vn"
    When I fill in "inputPassword" with "duy"
    When I fill in "inputPasswordReType" with "duyphan"
    And I press "Register"
    Then I should see "Fail register"
    
  @javascript
  Scenario: Registering account fail with pass empty value
    Given I am on register page    
    When I fill in "inputEmail" with "duy.phan@asnet.com.vn"
    When I fill in "inputPassword" with "duy"
    When I fill in "inputPasswordReType" with ""
    And I press "Register"
    Then I should see "Fail register"