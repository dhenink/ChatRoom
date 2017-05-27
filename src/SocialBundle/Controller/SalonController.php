<?php

namespace SocialBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use SocialBundle\Entity\Salon;
use SocialBundle\Form\Type\SalonType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

/**
 * SalonController
 *
 * @author Kévin Dhénin <dhenin.k@laposte.net>
 */
class SalonController extends Controller
{
    /**
     * @Template("SocialBundle:Salon:salon.new.html.twig")
     * @Route("/salons/ajouter", name="salon_ajouter")
     * @Security("is_granted('IS_AUTHENTICATED_REMEMBERED')")
     *
     */
    public function salonAjouterAction(Request $request){

        $salon = new Salon();

        $form = $this->createForm(SalonType::class,$salon);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($salon);
            $em->flush();

            return $this->redirectToRoute('index');

        }

        return array(
            'salon' => $salon,
            'form' => $form->createView(),
        );
    }

    /**
     * @Template("SocialBundle:Salon:salon.show.html.twig")
     * @Route("/salons/{id}", requirements={"id": "\d+"}, name="salon_show")
     * @Security("is_granted('IS_AUTHENTICATED_REMEMBERED')")
     */
    public function salonConsulterAction(Request $request, Salon $salon){

        $em = $this->getDoctrine()->getManager();
        $messages = $em->getRepository('SocialBundle:Message')->listeMessagesParSalon($salon);

        return array(
            'salon' => $salon,
            'messages'=>$messages,
        );
    }

    /**
     * @Template("SocialBundle:Salon:salon.editer.html.twig")
     * @Route("/salons/editer/{id}", requirements={"id": "\d+"}, name="salon_editer")
     * @Security("is_granted('IS_AUTHENTICATED_REMEMBERED') and has_role('ROLE_ACTN.U')")
     */
    public function salonEditerAction(Request $request, Salon $salon)
    {
        $em = $this->getDoctrine()->getManager();
        $editForm = $this->createForm(SalonEditionType::class, $salon);

        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $em->persist($salon);
            $em->flush();
            $this->addFlash('success', 'L\'salon '. $salon->getTitre() .' a été modifié');

            return $this->redirectToRoute('salon_consulter', array('id' => $salon->getId()));
        }

        return array(
            'salon' => $salon,
            'edit_form' => $editForm->createView(),
        );
    }
}
