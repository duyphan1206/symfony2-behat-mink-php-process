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
<<<<<<< HEAD
     *  {@inheritDoc}
=======
     * {@inheritDoc}
>>>>>>> d3fca9dc84271eb84a85dcb6baec4817e7c288f7
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

        $this->assertEquals('Test task', $task->setTask('Test task')->getTask());
    }

    public function testSetComplete()
    {
    	$task = $this->em
            ->getRepository('DevTaskBundle:Task')
            ->find(1);

        $this->assertEquals(true, $task->setComplete(true)->getComplete());
    }

}