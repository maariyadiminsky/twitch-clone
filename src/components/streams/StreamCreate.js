import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
    renderInput(formProps) {
        return (
            <div className="field">
                <label>{formProps.label}</label>
                <input {...formProps.input}/>
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

export default reduxForm({
    form: "streamCreate" // form name
})(StreamCreate);