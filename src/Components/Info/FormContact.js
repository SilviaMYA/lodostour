//Dependencies
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

const initialState = { 
    fullName:"",
    email: "",
    phone: "",
    message: "",
    fullNameError:"",
    emailError: "",
    messageError: ""
}


class FormContact extends Component {

    state = initialState;
/*
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
*/
    handleChange = (event) => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                :event.target.value
        });
    };

    handleSubmit = () => {
        // event.preventDefault();

        const isValid = this.validate();
        if(isValid){
            console.log('INTO formContact.js');
            console.log(this.state);
            console.log('END formContact.js');

            this.setState(initialState);
        }
        // this.props.onSubmit(this.state);
        //  console.log(this.state);
    };


    //**** Validate this funcion is usefull if I'm not using type="email"*/
    validate = () => {
        //let fullNameError = "";   // if I want to validate more fields
               
        let emailError = "";

        if(!this.state.email.includes("@")){
            emailError = "Invalid email";
        }

        if (emailError){
            this.setState({ emailError });
            return false;
        }

        return true;
    }


    render() {
        return (
            <div className="co-md-12 form_contact">
                <form onSubmit={this.handleSubmit} method="POST" action="../../insertContactForm">
                        <h2 style={{color: 'gray'}}>Say hello...!</h2>
                        <input
                            type="text"
                            className="form-control"
                            name="fullName"
                            placeholder="* Full name"
                            value={this.state.fullName}
                            onChange={this.handleChange} required/>
                            <div style={{fontSize: 12, color: "red" }}>{this.state.fullNameError}</div>

                                <input
                                    type="email"
                                    className="form-control "
                                    name="email"
                                    placeholder="* Email"
                                    value={this.state.email}
                                    onChange={this.handleChange} required/>
                                    <div style={{fontSize: 12, color: "red" }}>{this.state.emailError}</div>
                         
                                <input
                                    type="phone"
                                    className="form-control"
                                    name="phone"
                                    placeholder=" Phone number"
                                    value={this.state.phone}
                                    onChange={this.handleChange} />
                         
                        <textarea
                            name="message"
                            placeholder="* Text here..."
                            value={this.state.message}
                            onChange={this.handleChange}
                            rows="4"
                            style={{ marginTop: '30px' }}
                            className="form-control" required/> 
                            
                            <div style={{fontSize: 12, color: "red" }}>{this.state.messageError}</div>
                            <Button type="submit" variant="outline-success" size="lg" style={{ marginTop: '10px', width: '50%' }}>Send</Button>
                    
                </form>
            </div>

        );
    }
}

export default FormContact;