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
		//$resultX = array();
		
		
		
		 //Uncomment below to test on localhost, as cURL does not work on localhost
		 
		$response = array('status' => 'DELIVERED', 'errorX' => 'No cURL error');
		$response = json_encode($response, true); //manually turn array to json, as we get json in real answer from textbelt
		$response = json_decode($response, true);  //manually turn json to array, as we do in real
		//$resultX['textBeltResponse'] = $response;
		return $response;
		
		//End Uncomment below to test on localhost, as cURL does not work on localhost
		
		
		
		$ch = curl_init('https://textbelt.com/status/' . $smsID);
               
               //curl_setopt($ch, CURLOPT_POST, 1);
               //curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
               curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); //return result

               $response = curl_exec($ch);
		       $err = curl_error($ch);
               curl_close($ch);
			   
			    //info if any curl error happened
		      /*if ($err) { 
			      echo "error";
			  }*/
			   
			   $messageAnswer = json_decode($response, TRUE); //gets the cUrl response and decode to normal array
		
		     /* if($messageAnswer['quotaRemaining'] > 0){
		          echo "<span class='green'> Quota: " . $messageAnswer['quotaRemaining']. "</span>";
			  } else {
				  echo "<span class='red'> Quota: " . $messageAnswer['quotaRemaining']. "</span>";
			  }*/
			  
			  
			  //return $messageAnswer['status'];
			  return $messageAnswer;
    }

}