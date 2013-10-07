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
            ->getManager()
        ;
    }

    public function testGetId()
    {
    	$task = $this->em
            ->getRepository('DevTaskBundle:Task')
            ->find(1);

        $this->assertEquals(1, $task->getId());
    }

    public function testSetTask()
    {
    	$task = $this->em
            ->getRepository('DevTaskBundle:Task')
            ->find(1);

        $this->assertFalse($task->setTask(new \DateTime()));
        $this->assertFalse($task->setTask(array('example' => 'example')));
        $this->assertFalse($task->setTask(true));
        $this->assertFalse($task->setTask(1));
        $this->assertFalse($task->setTask(null));
        $this->assertFalse($task->setTask(1.0));
        $this->assertInternalType('object', $task->setTask('Test task'));
    }

    public function testGetTask()
    {
        $task = $this->em
            ->getRepository('DevTaskBundle:Task')
            ->find(1);

        $this->assertInternalType('string', $task->getTask());
    }

    public function testSetComplete()
    {
    	$task = $this->em
            ->getRepository('DevTaskBundle:Task')
            ->find(1);

        $this->assertFalse($task->setComplete(new \DateTime()));
        $this->assertFalse($task->setComplete(array('example' => 'example')));
        $this->assertFalse($task->setComplete('example'));
        $this->assertFalse($task->setComplete(1));
        $this->assertFalse($task->setComplete(null));
        $this->assertFalse($task->setComplete(1.0));

        $this->assertInternalType('object', $task->setComplete(true));
    }

    public function testGetComplete()
    {
        $task = $this->em
            ->getRepository('DevTaskBundle:Task')
            ->find(1);

        $this->assertInternalType('boolean', $task->getComplete());
    }

    public function testSetCreated()
    {
        $task = $this->em
            ->getRepository('DevTaskBundle:Task')
            ->find(1);

        $this->assertInternalType('object', $task->setCreated());
    }

    public function testGetCreated()
    {
        $task = $this->em
            ->getRepository('DevTaskBundle:Task')
            ->find(1);

        $this->assertInternalType('object', $task->getCreated());
    }
}