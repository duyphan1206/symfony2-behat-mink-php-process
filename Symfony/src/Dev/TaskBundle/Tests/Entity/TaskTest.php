<?php
use Dev\TaskBundle\Entity\Task;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class TaskTest extends WebTestCase
{
    /**
    * @var \Doctrine\ORM\EntityManager
    */
    private $em;

    /**
     *  {@inheritDoc}
     */
    public function setUp()
    {
        static::$kernel = static::createKernel();
        static::$kernel->boot();
        $this->em = static::$kernel->getContainer()
            ->get('doctrine')
            ->getManager();

        $this->tasks = $this->em
            ->getRepository('DevTaskBundle:Task')
            ->findAll();

        $this->task = $this->tasks[0];
    }

    public function testGetId()
    {
        $this->assertInternalType('integer', $this->task->getId());
    }

    public function testSetTask()
    {
        $this->assertFalse($this->task->setTask(new \DateTime()));
        $this->assertFalse($this->task->setTask(array('example' => 'example')));
        $this->assertFalse($this->task->setTask(true));
        $this->assertFalse($this->task->setTask(1));
        $this->assertFalse($this->task->setTask(null));
        $this->assertFalse($this->task->setTask(1.0));
        $this->assertInternalType('object', $this->task->setTask('Test task'));
    }

    public function testGetTask()
    {
        $this->assertInternalType('string', $this->task->getTask());
    }

    public function testSetComplete()
    {
        $this->assertFalse($this->task->setComplete(new \DateTime()));
        $this->assertFalse($this->task->setComplete(array('example' => 'example')));
        $this->assertFalse($this->task->setComplete('example'));
        $this->assertFalse($this->task->setComplete(1));
        $this->assertFalse($this->task->setComplete(null));
        $this->assertFalse($this->task->setComplete(1.0));

        $this->assertInternalType('object', $this->task->setComplete(true));
    }

    public function testGetComplete()
    {
        $this->assertInternalType('boolean', $this->task->getComplete());
    }

    public function testSetCreated()
    {

        $this->assertInternalType('object', $this->task->setCreated());
    }

    public function testGetCreated()
    {

        $this->assertInternalType('object', $this->task->getCreated());
    }
}