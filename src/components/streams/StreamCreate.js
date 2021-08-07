import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
    renderInputError(error) {
        return (
            <div className="ui error tiny message">
                <span className="header">{error}</span>
            </div>
        );
    }

    renderInput = ({ label, input, meta: { error, touched }}) => {
        let hasBeenTouchedAndHasError = touched && error;

        return (
            <div className={`field ${hasBeenTouchedAndHasError && "error"}`}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {hasBeenTouchedAndHasError && this.renderInputError(error)}
            </div>
        );
    }

    onSubmit(formValues) {
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button large inverted red">Create Stream</button>
            </form>
        );
    }
}

const validate = ({ title, description }) => {
    const errors = {};

    if (!title) {
        errors.title = "Streams must have a title"
    }

    if (!description) {
        errors.description = "Please tell us a bit about your Stream"
    }

    return errors;
}

export default reduxForm({
    form: "streamCreate",
    validate
})(StreamCreate);