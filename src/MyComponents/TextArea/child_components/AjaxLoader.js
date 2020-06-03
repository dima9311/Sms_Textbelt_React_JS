//Shows gif spinner loader, when user clicks "Send sms"
import React, { Component } from 'react';
import loaderX from '../../../images/loaddd.gif'

class AjaxLoader extends Component {
	constructor(props) {
    super(props);
    this.state = {
		
    };
 
   
  }
  
  //RENDER ------------------------------------------------
  render() {
		  
      return (
		 
        <div className='ajax-loader col-sm-12 col-xs-12'> 
		    <img src={loaderX}  className="error-img" alt="logo" />  {/*  hidden by default */}
		</div>

	  
    );
  }
}

export default AjaxLoader;
