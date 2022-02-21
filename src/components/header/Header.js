import React from 'react';
import { Nav,Button } from "react-bootstrap"
import { Link } from 'react-router-dom';
import "./header.css"

const Header = () => {
    return (
        <>
            <header className="containerr">
                <h1 className="logoName" >Recipes</h1>

                <Nav className="header-nav">
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' to="/favorite">Favorite</Link>
                    <Button className="signinBtn" variant="light"> Signin </Button>
                </Nav>

                {/* <Navbar/> */}
            </header>
            <section className="hero">
                <h1>Don't you know what to cook today ?</h1>
                <h2>Scroll down to explore our recipes ...</h2>
            </section>
        </>
    )
};

export default Header;
