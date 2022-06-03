import React, { Component } from "react";

import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

export default class NavbarComp extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant={"dark"} expand="lg">
                    <Navbar.Brand>Canopus Data Capturer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Carga de Cuentas</Nav.Link>
                        <Nav.Link href="/balance-sheet">Balanza General</Nav.Link>
                        <Nav.Link href="/trial-balance">Balance de Comprobación</Nav.Link>
                        <Nav.Link href="/income-statement">Estado de Resultados</Nav.Link>
                        {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Manejo de Cuentas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Manejo de Empresas</NavDropdown.Item>
        </NavDropdown>*/}
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}