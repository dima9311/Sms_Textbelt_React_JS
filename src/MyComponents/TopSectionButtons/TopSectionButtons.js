import React, { Component } from 'react';
import '../../css/TopSectionButtons.css';
import {changeThemeInjected} from './functions_injected/changeThemeInjected'; //import my function

class TopSectionButtons extends Component {
	constructor(props) {
    super(props);
    this.state = {
		wallPapperCount : 0,
		ifTestMode : true,
		testButtonText : 'Test mode'	
    };
 
	this.runChangeThemeFunct = this.runChangeThemeFunct.bind(this);
	this.changeThemeInjected = changeThemeInjected.bind(this); //for injected from files function
	this.runChangeTestModeFunct = this.runChangeTestModeFunct.bind(this);
  }
  
  //run changing theme, uses injected file
  runChangeThemeFunct(){
	  this.changeThemeInjected();    
  }
 
  //change Test Mode/Production mode on button click
  runChangeTestModeFunct(){  
	  //toogle the state 
	  this.setState(prevState => ({
          ifTestMode: !prevState.ifTestMode
      })
	  //async
	  , () => {
		   //uplift the state 
		   //sends {this.state.smsTextChild} to parent <App/>, send it as callback
	        this.props.liftTestModeStatustHandler(this.state.ifTestMode);
		  
		   //change the text of button by state
	       if(this.state.ifTestMode === true){
		       this.setState({testButtonText: "Test Mode"}); 
		   } else {
			   this.setState({testButtonText: "Prod Mode"});
		   };
       });     
  }
  
  
  //RENDER ------------------------------------------------
  render() {
      return (
		<div className="col-sm-12 col-xs-12 top-buttons"> 	 
           <button className="btn btn-sm btn-my shadowX change-theme" onClick={this.runChangeThemeFunct} >Theme <i className="fa fa-repeat"></i></button>
		   
		   {/* Test mode button*/}
		   <button className={this.state.ifTestMode ? 'btn-test-mode btn btn-sm btn-my shadowX btn-next' : 'btn-dev-mode btn btn-sm btn-my shadowX btn-next'} onClick={this.runChangeTestModeFunct}> {this.state.testButtonText } <i className="fa fa-link"></i></button>
		</div>
    );
  }
}

export default TopSectionButtons;
