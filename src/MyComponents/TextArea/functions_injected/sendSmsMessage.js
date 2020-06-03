//USED in <TextArea/> as injected function 
import $ from 'jquery';


//Function that sends Sms via ajax
// **************************************************************************************
// **************************************************************************************
// 
//                                                                                     ** 
export function sendSmsMessage (){
	
	//disable send button
	$("#sendButton").prop( "disabled", true );
	
	//update this state in case in was set TRUE prev (to decide if to show Div with "Delivered/NotDelivered" Status). Value is used in <ResultFromTextbeltApi/>. Updated/uplifted from there too.
	 this.setState({ifUserClickedCheckDelivery: false});
	 
	 $(".child-div-sms").css('opacity', '1'); //shows yellow opacity div-> react imitation of {$(".del-st").stop().fadeOut("slow",function(){ /*$(this).html(finalText) */}).fadeIn(3000);
	
	
	
	   
	   //data to send via ajax
	   var myData = { 
	      serverPhone: this.state.phoneNumberChild,     //number
		  serverSms: this.state.smsTextChild,           //sms text
		  serverIfTestStatus: this.props.ifTestModeData //test/prod flag (set in <TopSectionButtons/>, uplifted to <App/> and passed here)
	   };
	   
	   
	   
	      //===========================================
	      //------ Variant_2 (ajax withcontentType/dataType) => Works

	      $(".ajax-loader").show(); //show loader
		  
		  //decide which url to use, switching ajax url when running on localHost or real Hosting
		  var localhostURL = 'http://localhost/sms_Textbelt_Api_React_JS/sms-api-react/Server_Side/ajax_script/sendSms.php';
		  var realServerProdURL = '../Server_Side/ajax_script/sendSms.php'; //can't use this on LocalHost as it'll redirect to http://localhost:3000/Server_Side/ajax_script/sendSms.php
		  var ajaxURL = '';
		  
		  //if finds "localhost" in current url
		  if(window.location.href.match(/localhost/)){  
			  ajaxURL = localhostURL; 
		  } else {
			  ajaxURL = realServerProdURL;
		  }
		  
		  
	      $.ajax({ 
            url: ajaxURL,
            type: 'POST',
			dataType: 'JSON', 
			crossDomain: true,
            data: myData,
            success: function(data) {
			  console.log(data);
			  
			  //uplift to TechInfo/use it instead of alert
			  this.props.liftTechAlertsInfoHandler("OK -> Variant_2\n" +  "Variant_2 " + data.cellar + "\n" +  JSON.stringify(data));
			  
			  if(data.textBeltResponse){ //textBeltResponse array is set in Classes/SendSms.php
				  //uplift to TechInfo/use it instead of alert
			      this.props.liftTechAlertsInfoHandler("textBeltResponse " + data.textBeltResponse.success);
			  
				  if(data.textBeltResponse.success === true){ //if sent
				      //update this.state.answerFromTextbelt (Variant for Object)
				      this.setState(prevState => ({
                          answerFromTextbelt: {    
                              ...prevState.answerFromTextbelt,    // keep all other key-value pairs
                              success: data.textBeltResponse.success, textId:data.textBeltResponse.textId,  // update the Object with key:value
						      quotaRemaining:data.textBeltResponse.quotaRemaining, clientMessage:'Sms sent successfully',
                              errorFromApi: data.textBeltResponse.errorX						
                          }
                      }));	
	
				  } else {
					  //update this.state.answerFromTextbelt (Variant for Object)
				      this.setState(prevState => ({
                          answerFromTextbelt: {    
                              ...prevState.answerFromTextbelt,    // keep all other key-value pairs
                              success: data.textBeltResponse.success, textId:'',  // update the Object with key:value
						      quotaRemaining:'', clientMessage:'Sms  not sent successfully',
                              errorFromApi: data.textBeltResponse.error						
                          }
                      }));
					  
				  }
				  
			     
			  } else { //if NO data.textBeltResponse, i.e no response from TextBelt Api
				  
				   //update this.state.answerFromTextbelt (Variant for Object)
				  this.setState(prevState => ({
                      answerFromTextbelt: {    
                        ...prevState.answerFromTextbelt,    // keep all other key-value pairs
                        success: false, textId:'', quotaRemaining:'', // update the Object with key:value
						clientMessage:'Sms message was not send', errorFromApi: data.errorX  
                     }
                  }));
			  }
			
			  runSomeActionsOnAjaxResult(this);
			 
             }.bind(this),  //end success //{.bind(this)} is a must otherwise setState won't work in success
			 error: function (error) {
				//alert("Variant_2 failed");
				//uplift to TechInfo/use it instead of alert
			     this.props.liftTechAlertsInfoHandler("Variant_2 failed");
				  
				$(".ajax-loader").fadeOut(5000); //hide loader
				
				//update this.state.answerFromTextbelt (Variant for Object)
				this.setState(prevState => ({
                    answerFromTextbelt: {    
                        ...prevState.answerFromTextbelt,    // keep all other key-value pairs
                        success: false, textId:'', quotaRemaining:'', clientMessage:'Sms message crashed'  // update the Object with key:value
                    }
                }));
				
			    runSomeActionsOnAjaxResult(this);
			 
            }.bind(this) //{.bind(this)} is a must otherwise setState won't work in success	
        });
		
}





 //run some action both on ajax success/fail
  // **************************************************************************************
  // **************************************************************************************
  //                                                                                     **
   function runSomeActionsOnAjaxResult(that){
	   $(".ajax-loader").fadeOut(5000); //hide loader
			  
	   //set true to show Div with result in <ResultFromTextbeltApi/>
	   that.setState({ifUserClickedSendSms: true});
			 
	   //Scroll to results in Mobile only
	   if(window.screen.width <= 640){ 
	       that.scrollResults(".resultScroll"); //scroll the page down to weather results
	    }
			 
	   //enable send button
	   $("#sendButton").prop( "disabled", false );
			 
	   //shows yellow opacity div-> react imitation of {$(".del-st").stop().fadeOut("slow",function(){ /*$(this).html(finalText) */}).fadeIn(3000);
	   setTimeout(function() {
	       $(".child-div-sms").css('opacity', '0'); 
	   }, 3000);
   }
   
   