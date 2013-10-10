# features/show.feature
Feature: Show Task
  In order to manage task
  As a user
  I need show task

  @javascript
  Scenario: Show succesful 
    Given I am on tasks page
    When I click on link show "32"
    Then I should see "Task : New Task"