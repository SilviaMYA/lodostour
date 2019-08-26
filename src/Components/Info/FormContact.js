//Dependencies
import React, { Component } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button'

const initialState = {
    full_name: "",
    email: "",
    phone_number: "",
    message: "",
    fullNameError: "",
    emailError: "",
    messageError: ""
}


class FormContact extends Component {
    constructor(props) {
        super(props);

        /*this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);*/
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = initialState;
    }

    handleChange = (event) => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const isValid = this.validate();
        if (isValid) {
            const new_contact = {
                full_name: this.state.full_name,
                email: this.state.email,
                phone_number: this.state.phone_number,
                message: this.state.message
            }

            axios.post('http://localhost:3001/lodos_tour_mongodb/add', new_contact)
                .then(res => console.log(res.data));

            this.setState(initialState);
        }
    };


    //**** Validate this funcion is usefull if I'm not using type="email"*/
    validate = () => {
        let emailError = "";

        if (!this.state.email.includes("@")) {
            emailError = "Invalid email";
        }

        if (emailError) {
            this.setState({ emailError });
            return false;
        }

        return true;
    }


    render() {
        return (
            <div className="co-md-12 form_contact">
                <form onSubmit={this.handleSubmit}>
                    <h2 style={{ color: 'gray' }}>Say hello...!</h2>
                    <input
                        type="text"
                        className="form-control"
                        name="full_name"
                        placeholder="* Full name"
                        value={this.state.full_name}
                        onChange={this.handleChange} required />
                    <div style={{ fontSize: 12, color: "red" }}>{this.state.fullNameError}</div>

                    <input
                        type="email"
                        className="form-control "
                        name="email"
                        placeholder="* Email"
                        value={this.state.email}
                        onChange={this.handleChange} required />
                    <div style={{ fontSize: 12, color: "red" }}>{this.state.emailError}</div>

                    <input
                        type="phone"
                        className="form-control"
                        name="phone_number"
                        placeholder=" Phone number"
                        value={this.state.phone_number}
                        onChange={this.handleChange} />

                    <textarea
                        name="message"
                        placeholder="* Text here..."
                        value={this.state.message}
                        onChange={this.handleChange}
                        rows="4"
                        style={{ marginTop: '30px' }}
                        className="form-control" required />

                    <div style={{ fontSize: 12, color: "red" }}>{this.state.messageError}</div>
                    <Button type="submit" variant="outline-success" size="lg" style={{ marginTop: '10px', width: '50%' }}>Send</Button>

                </form>
            </div>

        );
    }
}

export default FormContact;