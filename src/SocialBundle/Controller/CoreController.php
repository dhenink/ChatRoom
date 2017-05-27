<?php

namespace SocialBundle\Controller;

use FOS\UserBundle\Controller\SecurityController as BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security as Role;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\Routing\Annotation\Route;

/**
 * CoreController
 *
 * @author Kévin Dhénin <dhenin.k@laposte.net>
 */
class CoreController extends BaseController
{
    /**
     * @Template("SocialBundle:Core:index.html.twig")
     * @Route("/", name="index")
     * @Role("is_granted('IS_AUTHENTICATED_FULLY')")
     */
    public function indexAction(){
        $em = $this->getDoctrine()->getManager();
        $salons = $em->getRepository('SocialBundle:Salon')->listeSalons();

        return array('salons'=>$salons);
    }
}
