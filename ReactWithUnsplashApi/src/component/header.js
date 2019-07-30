
import React from 'react';
import '../App.css'
import {Navbar,Nav} from 'react-bootstrap';
class Header extends React.Component{


    render()
    {
        return( <Navbar  expand="lg">
        <Navbar.Brand className="title" href="/" variant="font-weight-bold">Photos Gallary</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" className="mainmenu" >HOME</Nav.Link>
            <Nav.Link href="#link" className="mainmenu">ABOUT</Nav.Link>
            <Nav.Link href="#home" className="mainmenu">DISCLAMER</Nav.Link>
            <Nav.Link href="#link" className="mainmenu">CREDITS</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
  
        );
    }

}

export default Header;