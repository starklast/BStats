import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

export class Header extends Component {
  render() {
    return (
      <header>
        <Navbar bg='light' expand='lg'>
          <Container>
            <Navbar.Brand href='/'>BStats</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link href='/edit'>
                  <i className='far fa-edit'></i> Edit
                </Nav.Link>
                <Nav.Link href='/stat'>
                  <i className='fas fa-calculator'> </i> Statistics
                </Nav.Link>
              </Nav>
              <Nav className='ml-auto'>
                <Nav.Link href='/signin'>
                  <i className='far fa-user'></i> sign in
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }
}

export default Header
