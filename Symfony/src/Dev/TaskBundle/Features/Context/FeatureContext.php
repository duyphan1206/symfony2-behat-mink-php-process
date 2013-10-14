<?php

namespace Dev\TaskBundle\Features\Context;

use Symfony\Component\HttpKernel\KernelInterface;
use Behat\Symfony2Extension\Context\KernelAwareInterface;
use Behat\MinkExtension\Context\MinkContext;

use Behat\Behat\Context\BehatContext,
    Behat\Behat\Exception\PendingException;
use Behat\Gherkin\Node\PyStringNode,
    Behat\Gherkin\Node\TableNode;

//
// Require 3rd-party libraries here:
//
//   require_once 'PHPUnit/Autoload.php';
//   require_once 'PHPUnit/Framework/Assert/Functions.php';
//

/**
 * Feature context.
 */
class FeatureContext extends MinkContext //MinkContext if you want to test web
                  implements KernelAwareInterface
{
    private $kernel;
    private $parameters;

    /**
     * Initializes context with parameters from behat.yml.
     *
     * @param array $parameters
     */
    public function __construct(array $parameters)
    {
        $this->parameters = $parameters;
    }

    /**
     * Sets HttpKernel instance.
     * This method will be automatically called by Symfony2Extension ContextInitializer.
     *
     * @param KernelInterface $kernel
     */
    public function setKernel(KernelInterface $kernel)
    {
        $this->kernel = $kernel;
    }

    /**
     * @Given /^I am on tasks page$/
     */
    public function iAmOnTasksPage()
    {
        $this->visit("/task");        
    }

    /**
     * @When /^I click on link new entry$/
     */
    public function iClickOnLinkNewEntry()
    {
        $this->clickLink("createNewEntry");
    }

    /**
     * @When /^I click on "([^"]*)"$/
     */
    public function iClickOn($id)
    {
        $this->clickLink($id . "-show");
    }

    /**
     * @When /^I click on edit "([^"]*)"$/
     */
    public function iClickOnEdit($id)
    {
        $this->clickLink($id . "-edit");
    }

    /**
     * @When /^I click on link back list$/
     */
    public function iClickOnLinkBackList()
    {
        $this->clickLink("backList");
    }

    /**
     * @When /^I click on delete link$/
     */
    public function iClickOnDeleteLink()
    {
        $this->clickLink("form_submit");
    }

    /**
     * @Given /^I am logged in as "([^"]*)" with password "([^"]*)"$/
     */
    public function iAmLoggedInAsWithPassword($arg1, $arg2)
    {
        $this->visit("/demo/secured/login");
        $this->fillField("username", $arg1);
        $this->fillField("password", $arg2);
        $this->pressButton("LOGIN");
    }


}
