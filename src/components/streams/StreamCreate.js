import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions/streams";

import { RESPONSE_STATUS_CREATED } from "../../const";

class StreamCreate extends Component {
    renderInputError(error) {
        return (
            <div className="ui error tiny message">
                <span className="header">{error}</span>
            </div>
        );
    }

    renderInput = ({ label, input, meta: { touched, submitFailed, error }}) => {
        let hasBeenTouchedAndHasError = (touched || submitFailed) && error;

        return (
            <div className={`field ${hasBeenTouchedAndHasError && "error"}`}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {hasBeenTouchedAndHasError && this.renderInputError(error)}
            </div>
        );
    }

    onSubmit = (formValues) => {
        const { createStream, history } = this.props;
        /*  
            todo: handle error better here
            see if the issue is related to internet connection etc.
            and based on the issue show a clear warning message 
        */
        createStream(formValues)
            .then(({status}) => status === RESPONSE_STATUS_CREATED && history.push("/"))
            .catch(error => console.log(error));
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
    let errors = {};

    if (!title) {
        errors.title = "Streams must have a title"
    }

    if (!description) {
        errors.description = "Please tell us a bit about your Stream"
    }

    return errors;
}

const FormWrapper = reduxForm({
    form: "streamCreate",
    validate
})(StreamCreate);

export default connect(null, { createStream })(FormWrapper);