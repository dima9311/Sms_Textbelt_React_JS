import React, { Component } from 'react';
import errorIMG from '../../images/error.gif';
import '../../css/Error.css';


class ErrorLayout extends Component {
	constructor(props) {
    super(props);
    this.state = {
    };
  }
  

  //RENDER ------------------------------------------------
  
  render() {
    return (
	    <p className="error-parent">
		    {/* Hidden loading copy indicator */}
		    <span id='error_loading'>
			    <img src={errorIMG}  className="error-img" alt="logo" />  {/*  hidden by default */}
		    </span>  
		</p>
    );
  }
  
}

export default ErrorLayout;
