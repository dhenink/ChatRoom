<?php

namespace SocialBundle\Controller;

use FOS\UserBundle\Controller\SecurityController as BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use SocialBundle\Entity\Salon;
use SocialBundle\Entity\Message;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PropertyAccess\PropertyAccess;
use Symfony\Component\Routing\Annotation\Route;

/**
 * MessageController
 *
 * @author Kévin Dhénin <dhenin.k@laposte.net>
 */
class MessageController extends BaseController
{
    /**
     * @Security("is_granted('IS_AUTHENTICATED_REMEMBERED')")
     * @Route("/message/ajouter/salon/{id}", requirements={"id": "\d+"}, name="message_ajouter", options={"expose"=true}, condition="request.isXmlHttpRequest()")
     */
    public function messageAjouterAction(Request $request,Salon $id)
    {
        $em = $this->getDoctrine()->getManager();
        $message = $request->request->get('corps');

        $mess = new Message();
        $mess->setCorps($message);
        $mess->setCompte($this->getUser());
        $mess->setSalon($id);
        $em->persist($mess);
        $em->flush();
        $messages = $em->getRepository('SocialBundle:Message')->listeMessagesParSalon($id);
        $template = $this->render('SocialBundle:Salon:salon.show.messages.html.twig', array('messages' => $messages))->getContent();

        return new JsonResponse($template, JsonResponse::HTTP_OK);

    }


    /**
     * @Security("is_granted('IS_AUTHENTICATED_REMEMBERED')")
     * @Route("/message/supprimer/{id}", name="message_supprimer", options={"expose"=true}, condition="request.isXmlHttpRequest()")
     */
    public function supprimerMessageAction(Message $id)
    {
        $em = $this->getDoctrine()->getManager();
        $mess = $em->getRepository('SocialBundle:Message')->findOneBy(array('id' => $id));

        if($mess !== null){
            $em->remove($id);
            $em->flush();
            $messages = $em->getRepository('SocialBundle:Message')->listeMessagesParSalon($id->getSalon());
            $template = $this->render('SocialBundle:Salon:salon.show.messages.html.twig', array('messages' => $messages))->getContent();

            return new JsonResponse($template, JsonResponse::HTTP_OK);
        }
    }

    /**
     * @Security("is_granted('IS_AUTHENTICATED_REMEMBERED')")
     * @Route("/message/editer", name="message_editer", options={"expose"=true}, condition="request.isXmlHttpRequest()")
     */
    public function messageEditerAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $id = $request->get('id');
        $valeur = $request->get('valeur');
        $attribut = $request->get('attribut');
        $message = $em->getRepository('SocialBundle:Message')->findOneBy(array('id'=>$id));

        if ($message !== null) {
            $accessor = PropertyAccess::createPropertyAccessor();
            $accessor->setValue($message, $attribut, $valeur);
            $em->persist($message);
            $em->flush();
            $messages = $em->getRepository('SocialBundle:Message')->listeMessagesParSalon($message->getSalon());
            $template = $this->render('SocialBundle:Salon:salon.consultation.affichage.messages.html.twig', array('messages' => $messages))->getContent();
            return new JsonResponse($template,JsonResponse::HTTP_OK);
        }
        else {
            return new JsonResponse(JsonResponse::HTTP_NOT_FOUND);
        }

    }
}