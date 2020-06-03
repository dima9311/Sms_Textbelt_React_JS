//USED in <TextArea/> as injected function 

import $ from 'jquery';
import 'jquery-ui/ui/widgets/autocomplete';
import 'jquery-ui/themes/base/autocomplete.css';  //according to folder stucture in node_modules
import swal from 'sweetalert';


//Function that Validates inputs on change (confirm delete 2nd arg (id)?????).
// **************************************************************************************
// **************************************************************************************
//                                                                                     ** 

export function AutocompleteFunction (){ 

  //alert('Autocomplete is ON');
  swal("Phone numbers autocomplete is ON", "---", "warning");

   
   var availablePhoneTags = [ 
							{label: "+420", value : "Czech"},
							{label: "+45",  value : "Denmark"},
							{label: "+49",  value : "Germany"},
							{label: "+972", value : "Israel"},
                            {label: "+48",  value : "Poland"},
                            {label: "+46",  value : "Sweden"},							
							{label: "+38",  value : "Ukraine"},
							{label: "+44",  value : "United Kingdom"},
							
							

							  
        ];
		
		// CHANGE FOR REACT!!!!!!!!!
		var that = this;
		
		//fix function for autocomplete (u type email in <input id="userName">, get autocomplete hints and onSelect puts email value (i.e user ID to) to hidden <input id="userID">)
	     function displaySelectedCategoryLabel(event, ui, that) {
			   
             //sets the selected to state in parent <TextArea/>
     		 that.setState({phoneNumberChild: ui.item.label}); 
			 that.handlePhoneNumberKeyPress(event); //reTrigger function that normally works on phone number change, validates number and uplift to parent <app/>
			 event.preventDefault();
        };
			
		
		//Autocomplete itself
		$("#cellNumberInput").autocomplete({
           minLength: 1,
           source: availablePhoneTags, 
		   
		   select: function (event, ui) {
                 displaySelectedCategoryLabel(event, ui, that);
            },
        })
		//build custom hints display
		.autocomplete( "instance" )._renderItem = function( ul, item ) {
        return $( "<li>" )
        .append( "<div>" + item.label + " => " + item.value + "</div>" )
        .appendTo( ul );
      };
}	
	   