<?php

namespace SocialBundle\Entity;

use Doctrine\Common\Collections\Collection;
use FOS\UserBundle\Model\User as BaseUser;

use SocialBundle\Traits\ucfirstUtf8;

use Doctrine\ORM\Mapping as ORM;

/**
 * Compte
 *
 *
 * @ORM\Entity(repositoryClass="SocialBundle\Repository\CompteRepository")
 */
class Compte extends BaseUser
{
    use ucfirstUtf8;
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var string
     *
     * @ORM\Column(name="pseudo", type="string", length=50, nullable=false)
     */
    private $pseudo;

    /**
     * @ORM\ManyToOne(targetEntity="SocialBundle\Entity\TypeCompte", inversedBy="comptes")
     * @ORM\JoinColumn(nullable=true)
     */
    private $typeCompte;

    /**
     *
     * @var Message
     *
     * @ORM\OneToMany(targetEntity="SocialBundle\Entity\Message",mappedBy="compte")
     * @ORM\JoinColumn(nullable=true)
     */
    private $messages;

    /**
     * Set pseudo
     *
     * @param string $pseudo
     *
     * @return Compte
     */
    public function setPseudo($pseudo)
    {
        $this->pseudo = mb_strtoupper($pseudo);

        return $this;
    }

    /**
     * Get pseudo
     *
     * @return string
     */
    public function getPseudo()
    {
        return $this->pseudo;
    }

    /**
     * Get typeCompte
     *
     * @return TypeCompte
     */
    public function getTypeCompte()
    {
        return $this->typeCompte;
    }

    /**
     * Set typeCompte
     *
     * @param string $typeCompte
     *
     * @return Compte
     */
    public function setTypeCompte($typeCompte)
    {
        $this->typeCompte = $typeCompte;
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }


    public function setPlainPassword($password)
    {
        return parent::setPlainPassword($password);
    }

    /**
     * Add message
     *
     * @param Message $message
     *
     * @return Compte
     */
    public function addMessage(Message $message)
    {
        $this->messages[] = $message;

        return $this;
    }

    /**
     * Remove message
     *
     * @param Message $message
     */
    public function removeMessage(Message $message)
    {
        $this->messages->removeElement($message);
    }

    /**
     * Get messages
     *
     * @return Collection
     */
    public function getMessages()
    {
        return $this->messages;
    }
}
