# features/hello.feature
Feature: Browse the generated default site
  to test the generated pages and content
  As a website user
  "Welcome" has to be shown

	@javascript
	Scenario: Browse the homepage
	Given I am on "/"
	Then I should see "Welcome the new website"

	@javascript
	Scenario: Browse the hello page
	Given I am on "/demo/hello/World"
	Then I should see "Hello World!"