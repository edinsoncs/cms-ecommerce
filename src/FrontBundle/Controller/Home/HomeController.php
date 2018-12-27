<?php 

namespace FrontBundle\Controller\Home;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class HomeController extends Controller {


	public function indexAction(Request $request) {

		//Define structure site
        return $this->render('@Front/Home/index.html.twig');

	}



}


 ?>