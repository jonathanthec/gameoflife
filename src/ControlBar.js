import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function ControlBar(props) {
    const { start, pause, clear, slow, fast, seed, gridSize } = props;

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="control-bar-container">
            <Navbar.Brand href="/" className="control-bar-container-title">Conway's Game of Life</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Select Grid" id="collasible-nav-dropdown" className="control-bar-button" variant="outline-light">
                        <NavDropdown.Item onClick={() => gridSize("1")}>Small Grid</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => gridSize("2")}>Medium Grid</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => gridSize("3")}>Large Grid</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Start" id="collasible-nav-dropdown" className="control-bar-button" variant="outline-light">
                        <NavDropdown.Item onClick={slow}>Slow</NavDropdown.Item>
                        <NavDropdown.Item onClick={start}>Fast</NavDropdown.Item>
                        <NavDropdown.Item onClick={fast}>Faster</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="control-bar-button" onClick={pause}>Pause</Nav.Link>
                    <Nav.Link className="control-bar-button" onClick={clear}>Clear</Nav.Link>
                    <Nav.Link className="control-bar-button" onClick={seed}>Randomize</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}