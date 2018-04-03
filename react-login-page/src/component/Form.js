import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
import {FormErrors} from './error';
// import validator from 'validator';
// import FaIconPack from 'react-icons/lib/fa';

import '../css/style.css';


class RegisterationForm extends Component {

	constructor (props) {
		super(props);
		this.state = {
			firstname:'',
			lastname:'',
			zipcode:'',
			username:'',
			email: '',
			password: '',
			ConfirmPassword:'',
			formErrors: {username:'', email: '', password: '', ConfirmPassword:''},
			usernameValid:false,
			emailValid: false,
			passwordValid: false,
			cnfpwdValid:false,
			formValid: false
		}
		this.handleChange=this.handleChange.bind(this);
		//this.contactSubmit=this.contactSubmit.bind(this);
	}
	// createUser(event) {
	// 	event.preventDefault();
	// 	console.log(this.refs.firstName.value);
	//  localStorage.setItem('firstName', (this.refs.firstName).value)
	// 	console.log(this.refs.lastName.value);
	// 	localStorage.setItem('lastName', (this.refs.lastName).value)
	// 	console.log(this.refs.email.value);
	// 	localStorage.setItem('email', (this.refs.email).value)
	// 	console.log(this.refs.password.value);
	// 	localStorage.setItem('password', (this.refs.password).value)
	// 	console.log(this.refs.cfrmpwd.value);
	// 	localStorage.setItem('cfrmpwd', (this.refs.cfrmpwd).value)
	// }
	handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({[name]: value},
									() => { this.validateField(name, value) });
	}
	contactSubmit(e){
		// e.preventDefault();
		alert("hi");
	}
	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let firstnameValid = this.state.firstnameValid;
		let lastnameValid = this.state.lastnameValid;
		let zipcodeValid = this.state.zipcodeValid;
		let usernameValid = this.state.usernameValid;
		let emailValid = this.state.emailValid;
		let passwordValid = this.state.passwordValid;
		let cnfpwdValid = this.state.cnfpwdValid;
		let name;

		switch(fieldName) {
			case 'username':
			 usernameValid= value.match(/^([a-z][A-Z]+)$/i);
			 fieldValidationErrors.username = usernameValid ? '' : ' is invalid';
			 name=this.state.usernameValid;			 
			 break;
			case 'email':
				emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
				fieldValidationErrors.email = emailValid ? '' : ' is invalid';
				name=this.state.emailValid;
				break;
			case 'password':
				passwordValid = value.length >= 6;
				fieldValidationErrors.password = passwordValid ? '': ' is too short';
				name=this.state.passwordValid;				
				break;
			case 'ConfirmPassword':
				cnfpwdValid = value.length >= 6;
				fieldValidationErrors.ConfirmPassword = cnfpwdValid ? '': ' is not match';
				name=this.state.cnfpwdValid;
				break;
			default:
				break;
		}
		if(name==false){
			document.getElementsByName(`${fieldName}`)[0].style.borderColor="red";
			document.getElementsByName(`${fieldName}`)[0].style.borderWidth = "2px";
		}else{
			document.getElementsByName(`${fieldName}`)[0].style.borderColor="green";
			document.getElementsByName(`${fieldName}`)[0].style.borderWidth = "2px";
		}

		this.setState({formErrors: fieldValidationErrors,
										usernameValid: usernameValid,
										emailValid: emailValid,
										passwordValid: passwordValid,
										cnfpwdValid: cnfpwdValid
									}, this.validateForm);
	}
	validateForm() {
		this.setState({formValid: this.state.usernameValid && this.state.emailValid && this.state.passwordValid && this.state.cnfpwdValid});
	}

	errorClass(error) {
		return(error.length === 0 ? '' : 'has-error');
	}

  render() {
    return (
      <React.Fragment>
        <section>
          <div className="heading">
            <h1>Register</h1>
            <p>Join the community and improve your game <br />with <b>ANGLR</b></p>
          </div>
					<form name="contactform" className="contactform">
            <div className="form-fields">
              <span><FontAwesome.FaUser /></span>
						<input ref="name" name="firstname" type="text" size="30" placeholder="Name" onChange={this.handleChange} value={this.state.name}/>

							</div>

            <div className="form-fields">
              <span><FontAwesome.FaUser /></span>
							<input ref="lastname" name="lastname" type="text" size="30" placeholder="LastName" onChange={this.handleChange} value={this.state.lastname}/>

            </div>
            <div className="form-fields">
              <span><FontAwesome.FaMapMarker /></span>

							<input ref="zipcode" name="zipcode" type="text" size="30" placeholder="zipcode" onChange={this.handleChange} value={this.state.zipcode}/>

            </div>
            <div className="form-fields">
              <span><FontAwesome.FaEnvelope /></span>

							<input  ref="email" name="email" type="text" size="30" placeholder="Email" onChange={this.handleChange} value={this.state.email} />
            </div>
            <div className="form-fields">
              <span><FontAwesome.FaUser /></span>

							<input ref="username" name="username" type="text" size="30" placeholder="Username" onChange={this.handleChange} value={this.state.username}/>

            </div>
            <div className="form-fields">
              <span><FontAwesome.FaUnlockAlt /></span>
							<input ref="password" name="password" type="text" size="30" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>

            </div>
            <div className="form-fields">
              <span><FontAwesome.FaLock /></span>

							<input ref="ConfirmPassword" name="ConfirmPassword" type="text" size="30" placeholder="confirmpassword" onChange={this.handleChange} value={this.state.confirmpassword}/>

            </div>
            <div className="condition">
              <p>By registering you agree to<br/> our <b>Terms</b> and <b>Privacy Police</b></p>
            </div>
						<div >
          
          </div>
						{/* <div>
						<span style={{color: "red"}}>{this.state.errors["email"]}</span><br />
						<span style={{color: "red"}}>{this.state.errors["username"]}</span><br />
						<span style={{color: "red"}}>{this.state.errors["password"]}</span><br />
						<span style={{color: "red"}}>{this.state.errors["confirmpassword"]}</span><br />
						</div> */}
						<div className="emsg">
						<FormErrors formErrors={this.state.formErrors}/>
          </div>
            <div className="register-button">
              <button className="submit" disabled={!this.state.formValid}  onClick= {this.contactSubmit.bind(this)}>Register</button>
							
            </div>
						
						
						<div className="check">
              <p>Already have an account?<a href="signin"><b>SIGN IN</b></a></p>

            </div>

          </form>
        </section>
      </React.Fragment>
    )
  }
}

export default RegisterationForm;
