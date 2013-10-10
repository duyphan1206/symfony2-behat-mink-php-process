# features/task.feature
Feature: Task
  In order to manage task
  As a user
  I need verify all CRUD task

  @javascript
  Scenario: Successful show list
    Given I am on tasks page
    Then I should see "Task list"

  @javascript
  Scenario: Show task succesful 
    Given I am on tasks page
    When I click on link show "64"
    Then I should see "Task : New Task"

  @javascript
  Scenario: Create task with succesful
    Given I am on tasks page
    When I click on link new entry
    Then the url should match "/new"
    And I fill in "dev_taskbundle_task_task" with "New Task"
    When I press "dev_taskbundle_task_submit"
    Then I should see "Task : New Task"

  @javascript
  Scenario: Fail create task without name task
  	Given I am on tasks page
    When I click on link new entry
    Then the url should match "/new"
    And I fill in "dev_taskbundle_task_task" with ""
    When I press "dev_taskbundle_task_submit"
    Then I should not see "Task : New Task"
