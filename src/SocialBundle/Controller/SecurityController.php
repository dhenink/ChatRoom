<?php

namespace SocialBundle\Controller;

use FOS\UserBundle\Controller\SecurityController as BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security as Role;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * SecurityController
 *
 * @author Kévin Dhénin <dhenin.k@laposte.net>
 */
class SecurityController extends BaseController
{
    /**
     * @Template("SocialBundle:Connexion:login.html.twig")
     * @Route("/connexion", name="login")
     * @Role("is_granted('IS_AUTHENTICATED_ANONYMOUSLY')")
     * @param Request $request
     * @return array
     */
    public function loginAction(Request $request){

    }

    /**
     * @Role("is_granted('IS_AUTHENTICATED_ANONYMOUSLY')")
     * @Route("/login_check", name="login_check")
     * @param Request $request
     * @return array
     */
    public function loginCheckAction(Request $request){

    }

    /**
     * @Role("is_granted('IS_AUTHENTICATED_ANONYMOUSLY')")
     * @Route("/login_failure", name="login_failure")
     */
    public function loginFailureAction(){
        $this->addFlash('error', $this->get('translator')->trans("Erreur sur le nom ou le mot de passe"));
        return $this->redirect($this->generateUrl('login'));
    }


}
