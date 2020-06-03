<?php
//middleware Class for ajax to get sms delivery status, used from ajax/getSmsDeliveryStatus.php <- js/sms_core.js
namespace MySmsTetxBelt\Classes;

class CheckSmsDeliveryStat 
{
	 /**
     * @return array[]
     */
    public function checkSmsStatus($smsID)
    {
		//Uncomment below to test on localhost, as cURL does not work on localhost
		/*$response = array('status' => 'DELIVERED', 'errorX' => 'No cURL error');
		$response = json_encode($response, true); //manually turn array to json, as we get json in real answer from textbelt
		$response = json_decode($response, true);  //manually turn json to array, as we do in real
		//$resultX['textBeltResponse'] = $response;
		return $response;
		*/
		//End Uncomment below to test on localhost, as cURL does not work on localhost
		
		
		
		$ch = curl_init('https://textbelt.com/status/' . $smsID);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); //return result

        $response = curl_exec($ch);
		$err = curl_error($ch);
        curl_close($ch);
        $messageAnswer = json_decode($response, TRUE); //gets the cUrl response and decode to normal array
		return $messageAnswer;
    }

}