<?php 

// src/Dev/TaskBundle/DataFixtures/ORM/LoadTaskDataTest.php

namespace Dev\TaskBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Dev\TaskBundle\Entity\Task;

class LoadUserData implements FixtureInterface
{
    /**
     * {@inheritDoc}
     */
    public function load(ObjectManager $manager)
    {        
        $task = new Task();
        $task->setTask('set task database testing');
        $task->setComplete(false);
        $task->setCreated();

        $manager->persist($task);
        $manager->flush();
    }
}
