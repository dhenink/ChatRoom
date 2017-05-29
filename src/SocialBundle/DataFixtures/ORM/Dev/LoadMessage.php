<?php
namespace SocialBundle\DataFixtures\ORM\Dev;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use SocialBundle\Entity\Message;

/**
 * LoadMessage
 *
 * @author Kévin Dhénin <dhenin.k@laposte.net>
 */
class LoadMessage extends AbstractFixture implements FixtureInterface, OrderedFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $salons = [['corps' => 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.'],
            ['corps' => 'Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. '],
            ['corps' => 'Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.'],
            ['corps' => 'Contrairement à une opinion répandue, le Lorem Ipsum n\'est pas simplement du texte aléatoire.'],
            ['corps' => 'Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans.'],

            ];

        $i = 1;
        foreach ($salons as $salon)
        {
            $objMessage = new Message();
            $objMessage->setSalon($manager->getReference('SocialBundle:Salon',$i));
            $objMessage->setCorps($salon['corps']);
            $objMessage->setDatePublication(new \DateTime());
            $objMessage->setCompte($manager->getReference('SocialBundle:Compte',3));
            $manager->persist($objMessage);
            $i++;
        }

        $manager->flush();
    }

    public function getOrder()
    {
        return 40;
    }
}
