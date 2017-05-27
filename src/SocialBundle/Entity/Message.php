<?php

namespace SocialBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use SocialBundle\Traits\ucfirstUtf8;

/**
 * Message
 *
 * @author Kévin Dhénin <dhenin.k@laposte.net>
 * @ORM\Entity(repositoryClass="SocialBundle\Repository\MessageRepository")
 */
class Message
{
    use ucfirstUtf8;
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="corps", type="text")
     */
    private $corps;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_publication", type="datetime")
     */
    private $datePublication;

    /**
     *
     * @var Compte
     *
     * @ORM\ManyToOne(targetEntity="SocialBundle\Entity\Compte",inversedBy="messages")
     * @ORM\JoinColumn(nullable=false)
     */
    private $compte;

    /**
     *
     * @var Salon
     *
     * @ORM\ManyToOne(targetEntity="SocialBundle\Entity\Salon",inversedBy="messages")
     * @ORM\JoinColumn(nullable=false)
     */
    private $salon;

    public function __construct()
    {
        $this->datePublication = new \DateTime('now',new \DateTimeZone('Europe/Paris'));
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getCorps()
    {
        return $this->corps;
    }

    /**
     * @param string $corps
     */
    public function setCorps($corps)
    {
        $this->corps = $corps;
    }

    /**
     * @return \DateTime
     */
    public function getDatePublication()
    {
        return $this->datePublication;
    }

    /**
     * @param \DateTime $datePublication
     */
    public function setDatePublication($datePublication)
    {
        $this->datePublication = $datePublication;
    }

    /**
     * @return Compte
     */
    public function getCompte()
    {
        return $this->compte;
    }

    /**
     * @param Compte $compte
     */
    public function setCompte($compte)
    {
        $this->compte = $compte;
    }

    /**
     * @return Salon
     */
    public function getSalon()
    {
        return $this->salon;
    }

    /**
     * @param Salon $salon
     */
    public function setSalon($salon)
    {
        $this->salon = $salon;
    }
}