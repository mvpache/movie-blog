import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { newUser } from '../actions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(formObject) {
    this.props.newUser(formObject);
  };
  render() {
    return(
      <div>
        <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
          <div className="Form">
            <div>
              <br />
              <label htmlFor="email">Email: </label>
              <Field name="email" component="input" type="text" />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <Field name="password" component="input" type="text" />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password: </label>
              <Field name="confirmPassword" component="input" type="text" />
            </div>
            <br />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

SignUp = connect(null, { newUser })(SignUp);

export default reduxForm({
  form: "signup",
  fields: ["email", "password", "confirmPassword"],
})(SignUp);
