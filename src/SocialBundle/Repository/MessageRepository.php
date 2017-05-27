<?php

namespace SocialBundle\Repository;

use Doctrine\ORM\EntityRepository;
use SocialBundle\Entity\Salon;

/**
 * MessageRepository
 *
 * @author Kévin Dhénin <dhenin.k@laposte.net>
 */
class MessageRepository extends EntityRepository
{
    public function listeMessagesParSalon(Salon $id){
        $qb = $this->_em->createQueryBuilder();
        $qb->select('messages, compte, salon')
            ->from('SocialBundle:Message', 'messages')
            ->leftJoin('messages.compte','compte')
            ->leftJoin('messages.salon','salon')
            ->andWhere('salon = :salon')
            ->setParameter('salon', $id)
            ->orderBy('messages.datePublication', 'ASC');


        return $qb->getQuery()->getArrayResult();
    }

}
