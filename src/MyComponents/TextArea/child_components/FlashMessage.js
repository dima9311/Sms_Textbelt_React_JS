import React, { Component } from 'react';
import '../../../css/FlashMessage.css';

class FlashMessage extends Component {
	constructor(props) {
    super(props);
    this.state = {
    };
   
  }

  //RENDER ------------------------------------------------
  render() {	  
      return (
		<div className="col-sm-12 col-xs-12 flash-message"> 	 
		  Left <br/> 0 chars
		</div>
    );
  }
}

export default FlashMessage;
