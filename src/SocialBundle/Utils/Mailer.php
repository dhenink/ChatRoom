<?php

namespace SocialBundle\Utils;

use Doctrine\ORM\EntityManager;
use SocialBundle\Entity\Compte;
use FOS\UserBundle\Util\TokenGenerator;
use Symfony\Bundle\TwigBundle\TwigEngine;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Translation\TranslatorInterface;

class Mailer
{
    private $mailer;
    private $router;
    private $tokenGenerator;
    private $templating;
    private $translator;

    public function __construct(\Swift_Mailer $mailer, UrlGeneratorInterface $router, TokenGenerator $tokenGenerator, TwigEngine $templating, TranslatorInterface $translator, EntityManager $em)
    {
        $this->mailer = $mailer;
        $this->router = $router;
        $this->tokenGenerator = $tokenGenerator;
        $this->templating = $templating;
        $this->translator = $translator;
        $this->em = $em;
    }

    public function sendRegistrationEmail(Compte $compte)
    {
        $compte->setConfirmationToken($this->tokenGenerator->generateToken());
        $url = $this->router->generate('token_check', array('token' => $compte->getConfirmationToken()), UrlGeneratorInterface::ABSOLUTE_URL);

        $message = \Swift_Message::newInstance();

        $message
            ->setSubject($this->translator->trans('mail.activation.title'))
            ->setFrom('bruay@waigeo.fr')
            ->setTo($compte->getEmail())
            ->setContentType('text/html')
            ->setBody($this->templating->render("SocialBundle:Emails:mail.register.html.twig", array(
                'usager' => $compte,
                'url' => $url))
            );
        $this->mailer->send($message);
    }

    public function sendEmailWithPassword(Compte $compte, $password)
    {
        $message = \Swift_Message::newInstance();

        $message
            ->setSubject($this->translator->trans('mail.creation_compte.title'))
            ->setFrom('bruay@waigeo.fr')
            ->setTo($compte->getEmail())
            ->setContentType('text/html')
            ->setBody($this->templating->render("SocialBundle:Emails:mail.creation.comptes.html.twig", array(
                'compte' => $compte,
                'password' => $password))
            );
        $this->mailer->send($message);
    }

    public function sendResetEmail(Compte $compte)
    {
        $compte->setConfirmationToken($this->tokenGenerator->generateToken());
        $url = $this->router->generate('reset_password', array('token' => $compte->getConfirmationToken()), UrlGeneratorInterface::ABSOLUTE_URL);

        $message = \Swift_Message::newInstance();

        $message
            ->setSubject($this->translator->trans('mail.reinitialisation.title'))
            ->setFrom('bruay@waigeo.fr')
            ->setTo($compte->getEmail())
            ->setContentType('text/html')
            ->setBody(
                $this->templating->render("SocialBundle:Emails:mail.reset.html.twig", array(
                    'usager' => $compte,
                    'url' => $url))
            );
        $this->mailer->send($message);
    }
}
