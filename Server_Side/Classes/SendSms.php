<?php

namespace MySmsTetxBelt\Classes;



class SendSms 
{
	
    /**
	 * @param string $_POST[]
     * @return array $text 
     */
    public function sendingSms($phoneNumber, $sms_text)
    {
		$resultX = array();
		
		 //Uncomment below to test on localhost, as cURL does not work on localhost
		 
		$response = array('success'=>true, 'textId' => 888888888, 'quotaRemaining' => 1 , 'errorX' => 'No cURL error');
		$response = json_encode($response, true); //manually turn array to json, as we get json in real answer from textbelt
		$response = json_decode($response, true);  //manually turn json to array, as we do in real
		$resultX['textBeltResponse'] = $response;
		return $resultX;
		
		//End Uncomment below to test on localhost, as cURL does not work on localhost
		
		$ch = curl_init('https://textbelt.com/text');
                $data = array(
                    'phone' =>  $phoneNumber, //'+380976641342',
                    'message' => $sms_text, //'Hello. Eng version. Русская версия',
                    'key' => SMS_API_KEY, //'textbelt',
                 );

               curl_setopt($ch, CURLOPT_POST, 1);
               curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
               curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
               curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); //must option to Kill SSL, otherwise sets an error
 
               $response = curl_exec($ch);
		       $err = curl_error($ch);
               curl_close($ch);
		
	          
	          //info if any curl error happened
		      if ($err) {
                  //echo "cURL Error #:" . $err;
			      $resultX['errorX'] = $err; //'<p class="bg-warning">Sms not sent.</p>' . $err;
              } else {
		          $resultX['errorX'] = "No cURL error detected";
              }
			  
			  //MEGA FIX, $response is already JSON, but later in ajax/sendSms we do it json encode once again that cause crash. So, firstly we deJSON it!!!!
			  $response2 = json_decode($response, true); 
			  
			  $resultX['textBeltResponse'] = $response2;
			  return $resultX;
		
		      /*
		      $messageAnswer = json_decode($response, TRUE); //gets the cUrl response and decode to normal array
		
		      //echo $messageAnswer;
		      if($messageAnswer['success']){
				  $_POST = array(); //clear Post array
				  $status = 'Sms was sent successfully';
				  $status = $status . 
				      '<button id="checSmsDeliveryStatus" class="btn check-sms-delivery" data-sms="'. $messageAnswer['textId'] .'">Check sms status.</button>' . //button to check send delivery of sent sms
					  '<p id="deliveyStatus"></p>';  // <p> to show Delivery result
					  
				  $status = $status . " " . $messageAnswer['success'];
		    } else {
			      $status = 'Sms not sent';
		    }
		
	        if(isset($messageAnswer['error'])){
	            $errMsg = $messageAnswer['error']; //gets the array element "message", it exists only if UUID is unique, i.e "message":"Feature does not exist", if Feature exists, 'message' does not exist
	        } else {
			    $errMsg = "No errors";
		    }
        
		    //convert array to string
		    $allMsg = str_replace('=', ':', http_build_query($messageAnswer, null, ','));
		
		    $text = $status . " Error: " .  $errMsg . " Err: " . $errorX ." Response=> " . $allMsg;
			return $text;
		    */
       
    }

}