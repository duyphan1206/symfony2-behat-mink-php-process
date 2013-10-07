# features/task.feature
Feature: Task
  In order to show task on task page
  As a user
  I need show list task page 

  @javascript
  Scenario: Successful show list
    Given I am on tasks page
    Then I should see "Task list"
