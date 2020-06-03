import React, { Component } from 'react';


class LiftedTo_Component extends Component {
	constructor(props) {
        super(props);
        this.state = {
			
        };
   }
  
 
  //RENDER ------------------------------------------------
  render() {
	  
	  //iterate over array to form list 
	  const newV = this.props.passedtechInfoValue.map(function(item, i){
	     return <li key={i}>{item}</li>
      });
	  
    return (
	   
	   <div className="lifted-to">
		   <h5>
		       <p className="underline">
		           Displays parent App.js states, which are updated/uplifted from TextArea.js and TopSectionButtons.js  => 
			   </p>
		       
			   <p className="underline">
		           Phone number and sms are uplifted from TextArea to App.js just for test control, as when sending a sms, this app uses state values from Textarea, while TestMode Status is used from App.js (and passed from App.js to TextArea.js as props)
			   </p>
			   
		       <p className="underline">
		           Passed States (passed from parent App.js) are:
			   </p>
			   
			    <p>
			      {this.props.passedPhoneNumberValue} {/* here goes lifted from Parent app.js value*/}
			   </p>
			   
			   <p>
			       {this.props.passedSmsValue} {/* here goes lifted from Parent app.js value*/}
			   </p>
			   
			   <p>
			     <b>Test:</b> {this.props.passedIfTestModeValue.toString()} {/* uses .toString() otherwise boolean won't be displayed */}
			   </p>
			   
			   {/* Shows alerts info */}
			   <p>
			       <b>TechInfo:</b> {newV} {/* */}
			   </p>
			   
		   </h5>     
		   
	   </div>
	  
    );
  }
}

export default LiftedTo_Component;
