# features/delete.feature
Feature: Delete Task
  In order to delete function
  As a user
  I need delete list task page 

  @javascript
  Scenario: Delete the list task
    Given I am on tasks page
    Then I should see "Task list" 
    When I click on link show "32"
    And I should see "Task : Clean databases"
    And I press "form_submit"
    Then I should be on "/task/"
