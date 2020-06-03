import React, { Component } from 'react';
import '../../css/Technical_Info.css';
import LiftedTo_Component from '../LiftUpComponent/LiftedTo_Component';


class TechnicalInfo extends Component {
	constructor(props) {
    super(props);
    this.state = {		
    };
  }
  
  //RENDER ------------------------------------------------
  render() {
	  
      return (
		<div className="col-sm-12 col-xs-12"> 	 
          <div className="dropdown">
              <input type="button" className="btn btn-primary border-x" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" value="Technical Info" />
			       
			
				  
              <div className="collapse col-sm-12 col-xs-12 text-left" id="collapseExample">
			         <p className="underline"> Alerts Replacer (TechnicalInfo/> -- uses LiftUpComponent/ LiftedTo_Component/>): </p>
					 <LiftedTo_Component passedSmsValue={this.props.smsTextData}  passedPhoneNumberValue={this.props.phoneNumberData} passedIfTestModeValue={this.props.ifTestModeData}  passedtechInfoValue={this.props.techInfoDate} />               { /* LiftedComponent component for displaying states from App.js */ }
              </div>
          </div>
		</div>
	  
    );
  }
}

export default TechnicalInfo;
