<?php
//Server regExp check for phone number and sms text
namespace MySmsTetxBelt\Classes;



class RegExpCheck 
{
    public function check($phoneNumber, $sms_text)
    {
        $checkedResult = array();
		
        //checking  phone number input
        $RegExp_Phone = '/^[+][\d]{8,9}[0-9]+$/'; //phone number regExp for world wide
        $RegExp_Phone_UA = '/^[+]380[\d]{2}[0-9]{7}$/'; //phone number regExp for Ukraine //must have strict +380 & 9 digits ///^[+]380[\d]{1,4}[0-9]+$/;
        $RegExp_Sms = '/.*[a-zA-Z0-9].*/';

        if (preg_match('/^[+]3/' , $_POST['serverPhone'])){
            if (!preg_match($RegExp_Phone_UA, $_POST['serverPhone'])){ 
                $checkedResult['errorPhone'] = 'UA Phone number is not OK';
	        } else {
		        $checkedResult['errorPhone'] = 'UA Phone number is Good';}
        } else {
	        if (!preg_match($RegExp_Phone, $_POST['serverPhone'])){ 
                $checkedResult['errorPhone'] = 'EU Phone number is not OK';
	        } else {
		        $checkedResult['errorPhone'] = 'EU Phone number is Good';}
        }
 
 
        //checks sms is at least 1 char_from_digit
        if (!preg_match($RegExp_Sms, $_POST['serverSms'])){
 	        $checkedResult['errorSms'] = "Sms is NOT OK";
        } else {
	        $checkedResult['errorSms'] = "Sms is Good";
        }
		return $checkedResult;
       
    }

}