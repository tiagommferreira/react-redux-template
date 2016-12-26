import React from 'react';
import { IndexLink, Link } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class NavigationBar extends React.Component {
    render() {
        const { location } = this.props;

        return(
            <Navbar inverse collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <IndexLink to="/">Template</IndexLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <IndexLinkContainer to="/">
                            <NavItem>Home</NavItem>
                        </IndexLinkContainer>
                        <LinkContainer to="/about">
                            <NavItem>About</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );

    }
    
};

