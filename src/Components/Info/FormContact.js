//Dependencies
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'


class FormContact extends Component {

    state = {
        fullName: "",
        email: "",
        phone: "",
        message: "",
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <div className="col-8 center-block form_contact">
                <form>
                    <div className="col-12 ">
                        <input
                            type="text"
                            className="form-control"
                            name="fullName"
                            placeholder="Full name"
                            value={this.state.fullName}
                            onChange={e => this.change(e)} />

                        <div className="form-inline">
                            <div className="col-6 not_padding_sides">
                                <input
                                    type="email"
                                    className="form-control "
                                    name="email"
                                    placeholder="example@something.com"
                                    value={this.state.email}
                                    onChange={e => this.change(e)} />
                            </div>
                            <div className="col-6 not_padding_sides">
                                <input
                                    type="phone"
                                    className="form-control"
                                    name="phone"
                                    placeholder="Phone number (Optional)"
                                    value={this.state.phone}
                                    onChange={e => this.change(e)} />
                            </div>
                        </div>
                        <textarea
                            name="message"
                            placeholder="Text here..."
                            value={this.state.message}
                            onChange={e => this.change(e)}

                            style={{ marginLeft: '10px', height: '120px', marginTop: '10px' }}
                            className="form-control" />
                            <Button className="" variant="outline-success" size="lg" style={{ marginTop: '10px', width: '111px' }}>Send</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormContact;