import React from 'react';
import {Navbar,Container,Nav,Button} from "react-bootstrap"
import { Link } from 'react-router-dom';
import "./navbar.css"

const Navbar2 = () => {
  return <div>
   <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand to="/">Recipes</Navbar.Brand>
    <Nav className="me-auto">
      <Link className='link' to="/">Home</Link>
      <Link className='link' to="/favorite">Favorite</Link>
    </Nav>
    <Navbar.Collapse className="justify-content-end">
      {/* <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text> */}
      <Button variant="danger">  <Link className='link' to="/">Sign out </Link></Button>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>;
};

export default Navbar2;
