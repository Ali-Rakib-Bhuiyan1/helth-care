

import React from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from './../../../hoocks/useAuth';


const Naver = () => {
    const {user, logOut} = useAuth()
   

    return (
        <Container>
             <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
             <div className="container mb-2">
         
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">    
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/services">services</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/About">About us</Nav.Link>
        {user?.email?
         <Button onClick ={logOut} variant="light">Logout</Button>:
          <Nav.Link as={Link} to="/login">Login</Nav.Link>


        }
        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>H
                
                </Nav>
            </Navbar.Collapse>
            </div>
            </Navbar>
            </Container>
        

   
            
       
   


    );
};

export default Naver;