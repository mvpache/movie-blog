import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class searchMovie extends Component {
  handleFormSubmit({title}) {
    this.props.searchMovie(title);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset>
          <label>Title:</label>
          <Field name='title' component='input' type ='text' />
        </fieldset>
        <button action ='submit'>Search</button>
      </form>
    );
  }
}
