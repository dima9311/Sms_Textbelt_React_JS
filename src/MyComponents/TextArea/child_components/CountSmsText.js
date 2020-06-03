import React, { Component } from 'react';

class CountSmsText extends Component {
	constructor(props) {
    super(props);
    this.state = {
		
    };
 
   
  }
  
  //RENDER ------------------------------------------------
  render() {
	  
      return (
		<div className="col-sm-12 col-xs-12"> 	 
          <div className="">
		  {/* Count: {160 - (this.props.smsText.length)}*/}
		  <span className="text-shadow"> Count: {this.props.smsText}</span>
          </div>
		</div>
	  
    );
  }
}

export default CountSmsText;
