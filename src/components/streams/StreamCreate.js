import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
    renderInputError = (error, touched) => error && touched && <div>{error}</div>;

    renderInput = ({ label, input, meta: { error, touched } }) => {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderInputError(error, touched)}
            </div>
        );
    }

    onSubmit(formValues) {
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
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