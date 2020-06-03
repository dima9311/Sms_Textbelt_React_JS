import React, { Component } from 'react';
//Message if RegExp founds cell number OK/or NOT*/}

class DisplayPhoneRegExpMessage extends Component {
	constructor(props) {
    super(props);
    this.state = {	
    };
  }
  

  //RENDER ------------------------------------------------
  render() {  
      return (
		<div className="col-sm-12 col-xs-12 err-message-div shadow-xx"> 	 
             <span className={this.props.status ? 'err-mess-wrong phone-error' : 'err-mess-ok phone-error'} > {this.props.phoneNumberErrorMessageX} </span>  {/* Message if RegExp founds cell number OK/or NOT*/}
		</div>
	  
    );
  }
}

export default DisplayPhoneRegExpMessage;
