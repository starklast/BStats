import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
export class Header extends Component {
  render() {
    return (
      <header>
        <Navbar bg='light' expand='lg'>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>BStats</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='mr-auto'>
                <LinkContainer to='/edit'>
                  <Nav.Link>
                    <i className='far fa-edit'></i> Edit
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/stat'>
                  <Nav.Link>
                    <i className='fas fa-calculator'> </i> Statistics
                  </Nav.Link>
                </LinkContainer>
              </Nav>
              <LinkContainer to='/signin'>
                <Nav className='ml-auto'>
                  <Nav.Link>
                    <i className='far fa-user'></i> sign in
                  </Nav.Link>
                </Nav>
              </LinkContainer>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }
}

export default Header
