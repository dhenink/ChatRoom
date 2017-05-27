<?php

namespace SocialBundle\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * SalonRepository
 * @author Kévin Dhénin <dhenin.k@laposte.net>
 */
class SalonRepository extends EntityRepository
{
    public function listeSalons() {

        $qb = $this->_em->createQueryBuilder();
        $qb->select('salons, messages')
            ->from('SocialBundle:Salon', 'salons')
            ->leftJoin('salons.messages','messages');

        return $qb->getQuery()->getArrayResult();
    }

}
