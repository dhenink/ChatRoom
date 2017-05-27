<?php
namespace SocialBundle\DataFixtures\ORM\Initialisation;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use SocialBundle\Entity\TypeCompte;

/**
 * LoadTypeCompte
 *
 * @author Kévin Dhénin <dhenin.k@laposte.net>
 */
class LoadTypeCompte extends AbstractFixture implements FixtureInterface, OrderedFixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $typeComptes = [['nom' => 'super-admin', 'role' => 'ROLE_SUPER_ADMIN'],
                        ['nom' => 'admin', 'role' => 'ROLE_ADMIN'],
                        ['nom' => 'utilisateur', 'role' => 'ROLE_UTILISATEUR']];

        foreach ($typeComptes as $typeCompte)
        {
            $objTypeCompte = new TypeCompte();
            $objTypeCompte->setNom($typeCompte['nom']);
            $objTypeCompte->setRole($typeCompte['role']);
            $manager->persist($objTypeCompte);
        }

        $manager->flush();
    }

    public function getOrder()
    {
        return 10;
    }
}
