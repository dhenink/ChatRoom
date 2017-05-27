<?php

namespace SocialBundle\Entity;

use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use SocialBundle\Traits\ucfirstUtf8;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Salon
 *
 * @ORM\Entity(repositoryClass="SocialBundle\Repository\SalonRepository")
 */
class Salon
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
     * @ORM\Column(name="titre", type="string", length=255)
     *
     * @Assert\NotBlank()
     */
    private $titre;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text")
     */
    private $description;

    /**
     *
     * @var Message
     *
     * @ORM\OneToMany(targetEntity="SocialBundle\Entity\Message",mappedBy="salon")
     * @ORM\JoinColumn(nullable=true)
     */
    private $messages;

    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set titre
     *
     * @param string $titre
     *
     * @return Salon
     */
    public function setTitre($titre)
    {
        $this->titre = $titre;

        return $this;
    }

    /**
     * Get titre
     *
     * @return string
     */
    public function getTitre()
    {
        return $this->titre;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return Salon
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Add message
     *
     * @param Message $message
     *
     * @return Salon
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
