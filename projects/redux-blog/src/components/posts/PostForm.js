import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="categories" component={this.renderInput} label="Post Cattegories" />
        <Field name="content" component={this.renderInput} label="Post Content" />
        <button className="ui button primary">Submit</button>
        <Link className="ui button danger" to="/">
          Cancel
        </Link>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.categories) {
    errors.categories = "You must enter some category";
  }

  if (!formValues.content) {
    errors.content = "You must enter content";
  }

  return errors;
};

export default reduxForm({
  form: "PostsNewForm",
  validate
})(StreamForm);
