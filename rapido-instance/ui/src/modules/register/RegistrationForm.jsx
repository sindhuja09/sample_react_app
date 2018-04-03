import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import RegistrationService from './RegistrationServices'
import PasswordConfig from '../passwordConfig.js'
import AlertContainer from 'react-alert'
import {showAlert, AlertOptions} from '../utils/AlertActions'

export default class extends React.Component{
  
  constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
        passwordConfig: PasswordConfig
      };
      this.alertOptions = AlertOptions;
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  /* Component Initialisation */
  componentDidMount() {
    this.refs["password"].pattern = this.state.passwordConfig.passwordFields.pattern;
    this.refs["password"].minLength = this.state.passwordConfig.passwordFields.minLength;
    this.refs["password"].maxLength = this.state.passwordConfig.passwordFields.maxLength;
  }

  
  /* Method to handle input change */
  handleChange(e) {
    e.target.classList.add('active');
    
    this.setState({
      [e.target.name]: e.target.value
    });
    
    this.showInputError(e.target.name);
  }

  /* Method to handle form submission */
  handleSubmit(e) {    
    e.preventDefault();
    if (this.showFormErrors()) {
      let regServRegisterRes = null;
      RegistrationService.register(this.state)
      .then((response) => {
        regServRegisterRes = response.clone();
        return response.json();
      })
      .then((responseData) => {
        if(regServRegisterRes.ok) {
          browserHistory.push('/mailVerification');
        } else {
          showAlert(this, (responseData.message) ? responseData.message : "Error occured");
          if(regServRegisterRes.status == 401) {
            sessionStorage.removeItem('user')
            sessionStorage.removeItem('token')
          }
        }
      })
      .catch(console.log);
    }
  }

  /* Method to show Form Errors */
  showFormErrors() {
    const inputs = document.querySelectorAll('input');
    let isFormValid = true;
    
    inputs.forEach(input => {
      input.classList.add('active');
      
      const isInputValid = this.showInputError(input.name);
      
      if (!isInputValid) {
        isFormValid = false;
      }
    });
    
    return isFormValid;
  }
  
  /* Method to show Input Errors */
  showInputError(refName) {
    const validity = this.refs[refName].validity;

    var label = "";
    if(refName == "firstName") {
      label = "First Name";
    } else if (refName == "lastName") {
      label = "Last Name";
    } else if (refName == "email") {
      label = "Email";
    } else if (refName == "password") {
      label = "Password";
    } else if (refName == "passwordConfirm") {
      label = "Confirm Password";
    }

    const error = document.getElementById(`${refName}Error`);
    const isPassword = refName.indexOf('password') !== -1;
    const isPasswordConfirm = refName === 'passwordConfirm';
    
    if (isPasswordConfirm) {
      if (this.refs.password.value !== this.refs.passwordConfirm.value) {
        this.refs.passwordConfirm.setCustomValidity('Passwords do not match');
      } else {
        this.refs.passwordConfirm.setCustomValidity('');
      }
    }

    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} is a required field`; 
      } else if (validity.typeMismatch) {
        error.textContent = `${label} should be a valid email address`; 
      } else if (isPassword && validity.patternMismatch) {
        error.textContent = `${label} should be between ${this.refs.password.minLength}-${this.refs.password.maxLength} characters`; 
      } else if (isPassword && (validity.tooShort || validity.tooLong)) {
        error.textContent = `${label} should be between ${this.refs.password.minLength}-${this.refs.password.maxLength} characters`; 
      } else if (isPasswordConfirm && validity.customError) {
        error.textContent = 'Passwords do not match';
      }
      return false;
    }
    
    error.textContent = '';
    return true;
  }

  /* Render Method */
  render() {
    let creationLabel;
    if (!this.props.fromDashboard) {
      creationLabel = <h3>Create an account</h3>
    }
    return(
      <div>
        <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
        <div className="col-sm-12 form-wrapper">
          <form className="col-sm-4 col-sm-offset-4 login-form create-account-form">
            <a href="/home">
            <svg width="80" height="80" viewBox="0 0 32 32">
              <path fill="#20465F" d="M1.21 24.009h-0.731v1.023h-0.425v0.594h0.425v1.843c0 0.441 0.213 0.714 0.75 0.714 0.208-0.004 0.408-0.022 0.605-0.051l-0.026-0.603c-0.098 0.029-0.213 0.050-0.331 0.058-0.186 0-0.27-0.051-0.27-0.213v-1.747h0.6v-0.593h-0.596v-1.023z"></path>
              <path fill="#20465F" d="M3.5 24.971c-0.829 0-1.329 0.625-1.329 1.605s0.5 1.604 1.295 1.604c0.59 0 1-0.19 1.285-0.625l-0.532-0.334c-0.181 0.215-0.34 0.375-0.681 0.375s-0.625-0.25-0.639-0.89h1.851v-0.306c0-0.741-0.449-1.426-1.25-1.42zM2.9 26.203c0.013-0.427 0.236-0.676 0.59-0.676s0.579 0.25 0.59 0.676h-1.183z"></path>
              <path fill="#20465F" d="M6.549 27.585c-0.433 0-0.625-0.321-0.625-1.009s0.194-1.011 0.601-1.011c0.356 0 0.485 0.206 0.604 0.47l0.607-0.238c-0.175-0.517-0.634-0.826-1.211-0.826-0.829 0-1.327 0.625-1.327 1.605s0.5 1.604 1.327 1.604c0.56 0 0.934-0.221 1.229-0.773l-0.555-0.314c-0.146 0.269-0.329 0.49-0.647 0.49z"></path>
              <path fill="#20465F" d="M9.906 24.971c-0.356 0-0.658 0.204-0.883 0.39v-1.529h-0.73v4.293h0.73v-2.235c0.168-0.194 0.411-0.318 0.684-0.326 0.251-0 0.376 0.132 0.376 0.55v2h0.731v-2.114c0-0.625-0.296-1.034-0.91-1.034z"></path>
              <path fill="#20465F" d="M13.185 24.971c-0.361 0-0.672 0.204-0.944 0.39v-0.33h-0.672v3.094h0.732v-2.235c0.166-0.194 0.408-0.319 0.68-0.326 0.251-0 0.376 0.132 0.376 0.55v2h0.73v-2.114c0-0.625-0.294-1.034-0.906-1.034z"></path>
              <path fill="#20465F" d="M15.941 24.971c-0.831 0-1.33 0.625-1.33 1.605s0.5 1.604 1.33 1.604 1.332-0.625 1.332-1.604-0.5-1.605-1.332-1.605zM15.941 27.585c-0.408 0-0.6-0.321-0.6-1.009s0.194-1.011 0.6-1.011 0.601 0.323 0.601 1.011-0.192 1.009-0.601 1.009z"></path>
              <path fill="#20465F" d="M17.871 28.12h0.729v-4.289h-0.729v4.289z"></path>
              <path fill="#20465F" d="M20.526 24.971c-0.831 0-1.33 0.625-1.33 1.605s0.5 1.604 1.33 1.604 1.332-0.625 1.332-1.604-0.5-1.605-1.332-1.605zM20.526 27.585c-0.407 0-0.6-0.321-0.6-1.009s0.194-1.011 0.6-1.011 0.602 0.323 0.602 1.011-0.195 1.009-0.602 1.009z"></path>
              <path fill="#20465F" d="M24.156 25.25c-0.203-0.166-0.464-0.269-0.749-0.274-0.8-0-1.21 0.534-1.21 1.076 0 0.375 0.2 0.611 0.451 0.819-0.135 0.041-0.476 0.267-0.476 0.564 0 0.334 0.313 0.41 0.451 0.5v0.014c-0.003-0-0.007-0-0.011-0-0.299 0-0.541 0.242-0.541 0.541 0 0.010 0 0.019 0.001 0.029-0 0.487 0.541 0.736 1.366 0.736 0.977 0 1.421-0.476 1.421-0.918 0-1.235-2.016-0.56-2.016-1.058 0-0.177 0.25-0.189 0.57-0.189 0.764 0 1.156-0.416 1.156-1 0-0.008 0-0.017 0-0.027 0-0.195-0.062-0.376-0.168-0.524 0.113-0.045 0.242-0.073 0.378-0.073 0.034 0 0.067 0.002 0.1 0.005l-0.004-0.5c-0.348-0.012-0.576 0.084-0.72 0.274zM23.26 28.061c0.709 0 0.929 0.214 0.929 0.356 0 0.106-0.161 0.343-0.633 0.343-0.611 0-0.815-0.109-0.815-0.343 0-0.133 0.125-0.356 0.519-0.356zM23.398 26.545c-0.282 0-0.511-0.229-0.511-0.511s0.229-0.511 0.511-0.511c0.282 0 0.511 0.229 0.511 0.511 0 0.001 0 0.002 0 0.003 0 0.281-0.228 0.509-0.509 0.509-0.001 0-0.002 0-0.003 0z"></path>
              <path fill="#20465F" d="M25.401 24.461h0.729v-0.691h-0.729v0.691z"></path>
              <path fill="#20465F" d="M25.401 28.12h0.729v-3.089h-0.729v3.089z"></path>
              <path fill="#20465F" d="M28.058 24.971c-0.831 0-1.331 0.625-1.331 1.605s0.5 1.604 1.296 1.604c0.591 0 1-0.19 1.286-0.625l-0.529-0.334c-0.186 0.215-0.343 0.375-0.685 0.375s-0.625-0.25-0.636-0.89h1.851v-0.306c0-0.741-0.448-1.426-1.25-1.42zM27.46 26.203c0.011-0.427 0.236-0.676 0.589-0.676s0.576 0.25 0.59 0.676h-1.179z"></path>
              <path fill="#20465F" d="M30.416 25.821c0-0.184 0.125-0.302 0.41-0.302 0.23 0 0.426 0.166 0.573 0.325l0.459-0.402c-0.258-0.289-0.631-0.47-1.047-0.47-0.012 0-0.023 0-0.035 0-0.527-0-1.011 0.321-1.011 0.896 0 1.078 1.532 0.887 1.532 1.413 0 0.209-0.175 0.351-0.435 0.351-0.315 0-0.543-0.207-0.714-0.445l-0.49 0.375c0.243 0.378 0.662 0.625 1.139 0.625 0.007 0 0.015-0 0.022-0 0.641 0 1.124-0.286 1.124-0.926 0-1.125-1.531-0.902-1.531-1.433z"></path>
              <path fill="#20465F" d="M30.655 20.259l-0.297-0.422c0.124-0.032 0.214-0.142 0.214-0.274 0-0.004-0-0.009-0-0.013 0-0.196-0.149-0.306-0.367-0.306h-0.316v1.035h0.179v-0.427h0.102l0.316 0.446zM30.196 19.718h-0.125v-0.309h0.137c0.009-0.002 0.020-0.003 0.031-0.003 0.085 0 0.154 0.069 0.154 0.154 0 0.001 0 0.001 0 0.002-0.002 0.086-0.072 0.155-0.159 0.155-0.011 0-0.022-0.001-0.032-0.003z"></path>
              <path fill="#20465F" d="M31.125 19.8c0-0.565-0.375-0.945-0.918-0.945s-0.918 0.386-0.918 0.945 0.375 0.94 0.918 0.94 0.918-0.375 0.918-0.94zM29.424 19.8c0-0.535 0.352-0.832 0.785-0.832s0.791 0.297 0.791 0.832-0.352 0.828-0.791 0.828-0.785-0.296-0.785-0.828z"></path>
              <path fill="#20465F" d="M23.176 18.64c0.020 0.748 0.107 1.464 0.255 2.157l4.932-0.077c-0.276-0.866-0.346-1.735-0.346-2.636v-9.17c0-2.229-0.42-3.467-1.613-4.556-1.134-1.036-2.983-1.607-5.484-1.607-2.16 0-4.024 0.459-5.447 1.341 1.081 0.922 1.869 2.159 2.221 3.569 0.486-0.703 1.423-1.033 2.635-1.033 2 0 2.575 1.393 2.591 2.561l0.010 0.561c-5.518 0.27-10.714 1.297-10.614 6.344 0.070 3.536 3.271 4.981 5.47 4.979 2.555 0 3.985-0.683 5.389-2.426zM19.676 17.739c-1.422 0-2.607-0.646-2.607-2.194 0-2.272 3.325-3.081 5.867-3.228v0.672c0 1.477-0.025 2.273-0.692 3.293-0.591 0.902-1.529 1.457-2.567 1.457z"></path>
              <path fill="#20465F" d="M9.349 21.066c1.367 0 2.896-0.291 4.21-0.984-1-0.861-1.738-2.117-1.806-3.852-0.467 0.451-1.137 0.676-1.906 0.676-2.569 0-3.287-1.931-3.287-5.242 0-3.26 0.774-5.030 3.275-5.030 1.555 0 2.68 0.84 2.68 2.436h4.842c-0.356-4.179-3.665-6.32-7.695-6.32-5.553 0-8.813 3.921-8.813 9.334 0 5.202 3.159 8.985 8.5 8.985z"></path>
            </svg>
            </a>
            <h3>API Design | Create Account</h3>
            <div className="form-group">
              <input className="form-control"
                type="text"
                name="firstName"
                ref="firstName"
                placeholder="First Name *"
                value={ this.state.firstName } 
                onChange={ this.handleChange }
                required />
              <div className="error" id="firstNameError"></div>
            </div>
            <div className="form-group">
              <input className="form-control"
                type="text"
                name="lastName"
                ref="lastName"
                placeholder="Last Name *"
                value={ this.state.lastName } 
                onChange={ this.handleChange }
                required />
              <div className="error" id="lastNameError"></div>
            </div>
            <div className="form-group">
              <input className="form-control"
                type="email"
                name="email"
                ref="email"
                placeholder="Email *"
                value={ this.state.email } 
                onChange={ this.handleChange }
                required />
              <div className="error" id="emailError" />
            </div>
            <div className="form-group">
              <input className="form-control"
                type="password" 
                name="password"
                ref="password"
                placeholder="Password *"
                value={ this.state.password } 
                onChange={ this.handleChange }
                required />
              <div className="error" id="passwordError" />
            </div>
            <div className="form-group">
              <input className="form-control"
                type="password" 
                name="passwordConfirm"
                ref="passwordConfirm"
                placeholder="Confirm Password *"
                value={ this.state.passwordConfirm } 
                onChange={ this.handleChange }
                required />
              <div className="error" id="passwordConfirmError" />
            </div>
            <div className="form-group registration-options">
              <button className="btn btn-default form-control register-button" onClick={ this.handleSubmit }>Register</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
