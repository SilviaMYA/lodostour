//Dependencies
import React, { Component } from "react";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

//Assets
import "../../css/header.css";
import small_logo from '../../images/small_logo.PNG';

class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { title, items } = this.props;  // const logo = this.props;  const items = this.props;
        return (
            <div className="green_background toolbar">
                <Navbar light expand="md" className="toolbar__navigation">
                    <div className="container">
                        <NavbarBrand className="navbar-brand " href="/">
                            <p>{title} <img src={small_logo} alt="LodosTour" />
                            </p>
                        </NavbarBrand>

                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto toolbar__navigation_items" navbar>

                                {
                                    items && items.map(
                                        (item, key) => <NavItem key={key}> <Link to={item.url} onClick={this.toggle}>{item.title}</Link></NavItem>
                                    )
                                }

                              {/*}  <UncontrolledDropdown className="item_dropdown" nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Options
                </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Option 1
                  </DropdownItem>
                                        <DropdownItem>
                                            Option 2
                  </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Reset
                  </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>*/}


                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}
export default Header;
