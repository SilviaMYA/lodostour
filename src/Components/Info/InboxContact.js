import React, {Component} from 'react';
import axios from 'axios';

const Contact = props => (
    <tr>
        <td>{props.my_contact.full_name}</td>
        <td>{props.my_contact.email}</td>
        <td>{props.my_contact.phone_number}</td>
        <td>{props.my_contact.message}</td>
       {/* <td>
            <Link to={"/edit/"+props.my_contact._id}>Edit</Link>
       </td>*/}
    </tr>
)


class Inbox extends Component {

    constructor(props) {
        super(props);
        this.state = {contacts: []};
    }

    componentDidMount() {
        this._baseUrl = 'http://localhost:3001/lodos_tour_mongodb/contact';
        axios.get(this._baseUrl)
            .then(response => {
                this.setState({contacts: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    inbox() {
        return this.state.contacts.map(function(currentContact, i) {
            return <Contact my_contact={currentContact} key={i} />;
        });        
    }

    render() {
        return (
            <div className="body_content">
                <h3>Contact List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Menssage</th>
                            {/*<th>Link</th>*/}
                        </tr>
                    </thead>
                    <tbody>
                        { this.inbox() }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Inbox;