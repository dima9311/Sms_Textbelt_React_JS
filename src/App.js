import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import TextAreaX from './MyComponents/TextArea/TextArea';
import ErrorLayout from './MyComponents/Error/ErrorLayout';  //display error gif
import TechnicalInfo from './MyComponents/TechnicalInfoComponent/TechnicalInfo';  //displays info instead of alert
import TopSectionButtons from './MyComponents/TopSectionButtons/TopSectionButtons';  //displays buttons (change theme, test mode)


class App extends Component {
    constructor(props) {
        super(props);
		
		this.state = {
			phoneNumber : "Phone number: I am set manually in state in parent <App/>", //this state is to display in <TechnicalInfo/> only, when sms is sent, value is taken from <TerxAreaX/> state => phoneNumberChild
			smsText : "Sms text:I am set manually in state in parent <App/>",          //this state is to display in <TechnicalInfo/> only, when sms is sent, value is taken from <TerxAreaX/> state => smsTextChild
		    ifTestMode : true, //true by default, it is uplifted from <TopSectionButtons/> and passed to <TerxAreaX/>, IT IS USED IN <TerxAreaX/> when sendinf Sms //used to switch between test/prod mode, when in test mode, Api uses on server side TextBelt test key {"textbelt_test"}
			techInfo:['some'], //just tech info, instead of alert
        };  
	    
    } 

	//method for catching lifted state from TextArea.js Component, triggered manually by {this.props.liftPhoneNumberHandler(this.state.phoneNumberChild);} in TerxArea.js
    liftPhoneNumberHandler(somePhoneNumber){
           this.setState({phoneNumber:somePhoneNumber});
    }
	
	
	//method for catching lifted state from TextArea.js Component, triggered manually by { this.props.liftSmsTextHandler(this.state.smsTextChild);} in TerxArea.js
    liftSmsTextHandler(someSmsText){
           this.setState({smsText:someSmsText});
    }
	
	
	
	//method for catching lifted state from TopSectionButtons.js Component, triggered manually by {this.props.liftTestModeStatustHandler(this.state.ifTestMode);} in TopSectionButtons.js
    liftTestModeStatustHandler(someTestModeBoolValue){
           this.setState({ifTestMode:someTestModeBoolValue});
    }
	
	//method for catching lifted state from TextArea.js (from  functions_injected/sendSmsMessage.js), triggered manually by {liftTechAlertsInfoHandler(someAlert);} in sendSmsMessage.js
	liftTechAlertsInfoHandler(someNewAlertValue){
		this.setState(prevState => ({
            techInfo: [...prevState.techInfo, someNewAlertValue]
        }));
	}
	
	
	
  render() {
	  var liftPhoneNumberHandler  =   this.liftPhoneNumberHandler;          //for catching lifted state from TextArea.js Component
	  var liftSmsTextHandler  =   this.liftSmsTextHandler;                  //for catching lifted state from TextArea.js Component
	  var liftTestModeStatustHandler  =   this.liftTestModeStatustHandler; //for catching lifted state from TopSectionButtons.js Component
	  var liftTechAlertsInfoHandler = this.liftTechAlertsInfoHandler;      //for catching lifted state from TextArea.js (from  functions_injected/sendSmsMessage.js)

    return (
	 
	    <div className="wrapper grey">
            <div className="container"> {/*<!-- container-full -->*/}
			
	            <div className="row row1">
				
                    <div className="col-sm-12 col-xs-12 divX App change-head-style"> 
		                <h4 className="header-x shadow-xx"> {this.props.name} {/* props are set in index.js */} <i className="fa fa-envelope-o" ></i>
						    <img src={logo}  className="react-logo-static" alt="logo" />
						</h4>
			            
						<TextAreaX ifTestModeData={this.state.ifTestMode } liftPhoneNumberHandler = {liftPhoneNumberHandler.bind(this)}  liftSmsTextHandler = {liftSmsTextHandler.bind(this)} liftTechAlertsInfoHandler = {liftTechAlertsInfoHandler.bind(this)} />
		            </div>
					
				   <TechnicalInfo phoneNumberData={this.state.phoneNumber}  smsTextData={this.state.smsText} ifTestModeData={this.state.ifTestMode} techInfoDate={this.state.techInfo} /> { /* displays info instead of alert */ }

			    </div>
			</div>
			
			<ErrorLayout/> { /* error gif animation component */ }  
			<TopSectionButtons liftTestModeStatustHandler = {liftTestModeStatustHandler.bind(this)} /> { /* displays buttons (change theme, test mode button)*/ } 
		</div>
	  
    );
  }
}

export default App;
