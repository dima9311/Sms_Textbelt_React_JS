<?php 
//handles ajax request from ResultFromTextbeltApi.js (sends SMS  via ajax)

//headers
header("Access-Control-Allow-Origin: *"); //must-have CORS header
header("Access-Control-Allow-Headers", "Content-Type"); 
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');


require_once '../Classes/CheckSmsDeliveryStat.php';
//include '../Classes/autoload.php'; //uses autoload instead of manual includin each class-> Error if it is included in 2 files=only1 is accepted 

$result = array(); //test array to monitor

if (isset($_GET['serverTextID'])){

    $delivery = new MySmsTetxBelt\Classes\CheckSmsDeliveryStat();
    $deliveryResult = $delivery->checkSmsStatus($_GET['serverTextID']);
} else {
	$deliveryResult = "Sms ID is missing";
}
echo json_encode($deliveryResult);
 
?>