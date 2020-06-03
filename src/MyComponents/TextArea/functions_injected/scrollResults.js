//USED in <TextArea/> as injected function 

import $ from 'jquery';

//Function to scroll
// **************************************************************************************
// **************************************************************************************
// 
//                                                                                     ** 
    export function scrollResults (divName, parent)  //arg(DivID, levels to go up from DivID)
	{  
		if (typeof(parent)==='undefined') {
		
            $('html, body').animate({
                scrollTop: $(divName).offset().top
             }, 'slow'); 
		     // END Scroll the page to results
		} else {
			//if 2nd argument is provided
			var stringX = "$(divName)" + parent + "offset().top";  //i.e constructs -> $("#divID").parent().parent().offset().top
			$('html, body').animate({
                scrollTop: eval(stringX)   //eval is must-have,
                }, 'slow'); 
		}
	
}