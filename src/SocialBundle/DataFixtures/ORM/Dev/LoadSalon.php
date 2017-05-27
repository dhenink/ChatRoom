<?php
namespace SocialBundle\DataFixtures\ORM\Dev;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use SocialBundle\Entity\Salon;

/**
 * LoadSalon
 *
 * @author Kévin Dhénin <dhenin.k@laposte.net>
 */
class LoadSalon extends AbstractFixture implements FixtureInterface, OrderedFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $salons = [['titre' => 'Cinéma', 'description' => 'Sortie des nouveaux film et idées de films à regarder '],
            ['titre' => 'Boite de nuits', 'description' => 'Organisation pour les sorties du week-end'],
            ['titre' => 'Symfony', 'description' => 'Conversation, aides et conseils sur symfony'],
            ['titre' => 'Javascript', 'description' => 'Conversation, aides et conseils sur Javascript'],
            ['titre' => 'Ruby On Rails', 'description' => 'Conversation, aides et conseils sur Ruby On Rails'],
            ['titre' => 'Python', 'description' => 'Conversation, aides et conseils sur Python'],

            ];

        $i = 1;
        foreach ($salons as $salon)
        {
            $objSalon = new Salon();
            $objSalon->setTitre($salon['titre']);
            $objSalon->setDescription($salon['description']);
            $manager->persist($objSalon);
            $i++;
        }

        $manager->flush();
    }

    public function getOrder()
    {
        return 30;
    }
}
