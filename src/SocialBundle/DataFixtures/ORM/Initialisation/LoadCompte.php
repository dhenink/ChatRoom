<?php
namespace SocialBundle\DataFixtures\ORM\Initialisation;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use SocialBundle\Entity\Compte;


/**
 * LoadCompte
 *
 * @author Kévin Dhénin <dhenin.k@laposte.net>
 */
class LoadCompte extends AbstractFixture implements FixtureInterface, OrderedFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $typeCompteRepo = $manager->getRepository("SocialBundle:TypeCompte");

        $typeCompte = $typeCompteRepo->findOneBy(array('nom' => 'super-admin'));

        $compte = new Compte();
        $compte->setUsername('root');
        $compte->setPseudo('root');
        $compte->setPlainPassword('root');
        $compte->setEmail('root@test.fr');
        $compte->setTypeCompte($typeCompte);
        $compte->setEnabled(true);
        $manager->persist($compte);
        $manager->flush();

        $typeCompteRepo = $manager->getRepository("SocialBundle:TypeCompte");

        $typeCompte = $typeCompteRepo->findOneBy(array('nom' => 'admin'));

        $compte = new Compte();
        $compte->setUsername('admin');
        $compte->setPseudo('admin');
        $compte->setPlainPassword('admin');
        $compte->setEmail('admin@test.fr');
        $compte->setTypeCompte($typeCompte);
        $compte->setEnabled(true);
        $manager->persist($compte);
        $manager->flush();

        $typeCompte = $typeCompteRepo->findOneBy(array('nom' => 'utilisateur'));

        $compte = new Compte();
        $compte->setUsername('utilisateur');
        $compte->setPseudo('utilisateur');
        $compte->setPlainPassword('utilisateur');
        $compte->setEmail('utilisateur@test.fr');
        $compte->setTypeCompte($typeCompte);
        $compte->setEnabled(true);
        $manager->persist($compte);
        $manager->flush();
    }

    public function getOrder()
    {
        return 20;
    }
}
