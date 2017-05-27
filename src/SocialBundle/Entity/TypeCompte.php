<?php

namespace SocialBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * TypeCompte
 *
 * @ORM\Entity(repositoryClass="SocialBundle\Repository\TypeCompteRepository")
 */
class TypeCompte
{
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
     * @ORM\Column(name="nom", type="string", length=255)
     * @Assert\NotBlank()
     */
    private $nom;

    /**
     * @var string
     *
     * @ORM\Column(name="role", type="string", length=255)
     * @Assert\NotBlank()
     */
    private $role;

    /**
     * @ORM\OneToMany(targetEntity="SocialBundle\Entity\Compte", mappedBy="typeCompte")
     * @ORM\JoinColumn(nullable=true)
     */
    private $comptes;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->comptes = new ArrayCollection();
    }

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
     * Set nom
     *
     * @param string $nom
     *
     * @return TypeCompte
     */
    public function setNom($nom)
    {
        $this->nom = $nom;

        return $this;
    }

    /**
     * Get nom
     *
     * @return string
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * Set role
     *
     * @param string $role
     *
     * @return TypeCompte
     */
    public function setRole($role)
    {
        $this->role = $role;

        return $this;
    }

    /**
     * Get role
     *
     * @return string
     */
    public function getRole()
    {
        return $this->role;
    }

    /**
     * Add compte
     *
     * @param Compte $compte
     *
     * @return TypeCompte
     */
    public function addCompte(Compte $compte)
    {
        $this->comptes[] = $compte;

        return $this;
    }

    /**
     * Remove compte
     *
     * @param Compte $compte
     */
    public function removeCompte(Compte $compte)
    {
        $this->comptes->removeElement($compte);
    }

    /**
     * Get comptes
     *
     * @return Collection
     */
    public function getComptes()
    {
        return $this->comptes;
    }

}
