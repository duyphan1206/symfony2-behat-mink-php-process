# features/edit.feature
Feature: Edit Task
  In order to manage task
  As a user
  I need create task

  @javascript
  Scenario: Edit task with succesful
    Given I am on tasks page
    When I click on link edit
    Then I am on the detail page this task
    And I fill form on new page
    When I press "dev_taskbundle_task_submit"
    Then I should see "Updated Succesful"

  @javascript
  Scenario: Fail edit task with update empty name task 
    Given I am on tasks page
    When I click on link edit
    Then I am on the detail page this task
    And I fill in "dev_taskbundle_task_task" with ""
    When I press "dev_taskbundle_task_submit"
    Then I should see "Updated Fail"
    And I should see "Please fill out this field"