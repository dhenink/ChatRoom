<?php

namespace SocialBundle\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * TypeCompteRepository
 *
 * This class was generated by the PhpStorm "Php Annotations" Plugin. Add your own custom
 * repository methods below.
 */
class TypeCompteRepository extends EntityRepository
{
    public function liste()
    {
        $qb = $this->_em->createQueryBuilder()
            ->select('tc')
            ->from('SocialBundle:TypeCompte', 'tc');
        return $qb
            ->getQuery()
            ->getArrayResult();
    }
}
