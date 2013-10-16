Feature: Logging Out
  In order to keep the system secure
  As a user
  I want to logout
  
  Scenario: Logout
    Given I am logged in as "admin" with password "adminpass"
    Given I am on "/demo/secured/hello/World"
    When I follow "Logout"
    Then I should be on "/demo/"
    And I should see "Login"    