<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
//use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller {

    /**
     * @Route("/", options={"expose"=true}, name="homepage")
     */
    public function indexAction(Request $request) {
        return $this->render('default/index.html.twig', array());
    }

    /**
     * @Route("/formsubmit", options={"expose"=true}, name="my_route_to_submit")
     */
    public function submitAction(Request $request) {
        $jsonString = file_get_contents('php://input');
        $form_data = json_decode($jsonString, true);
        if ($form_data != null) {
            echo 'Success!!!';
            var_dump($form_data);
        } else {
            echo 'Sorry!!!';
            var_dump($form_data);
        }
        exit;
    }

}
