<?php 
//handles ajax request from ResultFromTextbeltApi.js (sends SMS  via ajax)

//headers
header("Access-Control-Allow-Origin: *"); //must-have CORS header
//header('Content-Type: application/json); //header('Content-Type: application/json; charset=utf-8'); // <= MUST BE TURNED OFF, THIS CAUSED CRASH IN CORS JSON
header("Access-Control-Allow-Headers", "Content-Type"); //DOES NOT MATTER
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');


//header("Access-Control-Allow-Origin: http://localhost:4200");
//header("Access-Control-Allow-Headers:  Origin, X-Requested-With, Content-Type, Accept"); //Content-Type, Authorization, Accept, Origin, 
//header("Access-Control-Allow-Credentials : false");




require_once '../Classes/CheckSmsDeliveryStat.php';
//include '../Classes/autoload.php'; //uses autoload instead of manual includin each class-> Error if it is included in 2 files=only1 is accepted 

$result = array(); //test array to monitor

if (isset($_GET['serverTextID'])){
	
    //
    $delivery = new MySmsTetxBelt\Classes\CheckSmsDeliveryStat();
    $deliveryResult = $delivery->checkSmsStatus($_GET['serverTextID']);
} else {
	$deliveryResult = "Sms ID is missing";
}



//$result = array_merge($result, $checked, $smsSendStatus); 

//returns json 
echo json_encode($deliveryResult);
 


  
  
 
//die();
?>