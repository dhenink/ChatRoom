<?php

namespace SocialBundle\Repository;

use Doctrine\ORM\EntityRepository;
use SocialBundle\Entity\Compte;

/**
 * CompteRepository
 *
 * @author Kévin Dhénin <dhenin.k@laposte.net>
 */
class CompteRepository extends EntityRepository
{
  public function listeComptes() {
      $qb = $this->_em->createQueryBuilder();
      $qb->select('compte')
          ->from('SocialBundle:Compte', 'compte')
          ->orderBy('compte.id', 'ASC')
      ;

  return $qb
    ->getQuery()
    ->getResult();
  }

    public function getCompte(Compte $compte)
    {
        $qb = $this->_em->createQueryBuilder()
            ->select('compte')
            ->from('SocialBundle:Compte', 'compte');
        $qb->andWhere('compte = :compte')
            ->setParameter('compte',$compte);

        $user = $qb->getQuery()->getArrayResult()[0];
        unset($user['password'],$user['salt']);
        return $user;
    }

}
