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
		 /*
		$response = array('success'=>true, 'textId' => 888888888, 'quotaRemaining' => 1 , 'errorX' => 'No cURL error');
		$response = json_encode($response, true); //manually turn array to json, as we get json in real answer from textbelt
		$response = json_decode($response, true);  //manually turn json to array, as we do in real
		$resultX['textBeltResponse'] = $response;
		return $resultX;
		*/
		//End Uncomment below to test on localhost, as cURL does not work on localhost
		
		$ch = curl_init('https://textbelt.com/text');
                $data = array(
                    'phone' =>  $phoneNumber, 
                    'message' => $sms_text, 
                    'key' => SMS_API_KEY, 
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
			      $resultX['errorX'] = $err; 
              } else {
		          $resultX['errorX'] = "No cURL error detected";
              }
			  
			  $response2 = json_decode($response, true); 
			  
			  $resultX['textBeltResponse'] = $response2;
			  return $resultX;
       
    }

}