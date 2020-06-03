//USED in <TextArea/> as injected function 
import $ from 'jquery';


//Function that Validates inputs on change (confirm delete 2nd arg (id)?????).
// **************************************************************************************
// **************************************************************************************
// 
export function myValidate (thisX, id, regExp, butttonToDisable,  messageErr, messageSuccess, e) { 
//args(input, $this.id, RegExp, button to disable, error message to show, event)
	 
     if(thisX !==''){
		//gets the input
        var idm = thisX;

        //if  REgEXp  match
        if (idm.match(regExp)){ 
		    this.setState({phoneNumberErrorMessage: 'correct ' + messageSuccess + ' phone'});
			this.setState({isEnable : false});
            $("#" + butttonToDisable).html('OK');
                      
         } else {  
		     this.setState({phoneNumberErrorMessage: messageErr});
			 this.setState({isEnable : true});
             $("#" + butttonToDisable).html/*val*/('Disabled');
         }
   
     } else {//if  the input is empty, set no  error to span
	      this.setState({phoneNumberErrorMessage: '*'});
		  this.setState({isEnable : false});
         $("#" + butttonToDisable).html('OK');  
		 return false;
     } 
}	
	   