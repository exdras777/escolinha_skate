import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logoDaEscolinhaPath from '../assets/images/logo.png'; // Ou .jpg, etc.

function AppNavbar() {
  return (
    <Navbar expand="lg" variant="dark" fixed="top" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img src={logoDaEscolinhaPath} alt="Logo da Escolinha" className="mr-2" style={{ height: '30px' }} />
          Escolinha do Bob
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">Início</Nav.Link>
            <Nav.Link href="#sobre">Sobre Nós</Nav.Link>
            <Nav.Link href="#agendamento">Agendar Aula</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;