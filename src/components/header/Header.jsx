import React, { useState } from 'react';
import { Nav, Button } from "react-bootstrap"
import { Link } from 'react-router-dom';
import SigninModal from './signinModal/SigninModal';
import "./header.css"

const Header = ({ user }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleSignout = () => {
        user.setUser_id(0);
        user.setPassword("");
        user.setUserName("");
    }

    return (
        <>
            <header className="containerr">
                <h1 className="logoName" >Recipes</h1>

                <Nav className="header-nav">
                    <Link className='link' to="/">Home</Link>
                    {user.user_id !== 0 &&
                        <>
                            <Link className='link' to="/favorite">Favorite</Link>
                            <Link className='link' to="/">   <Button variant="danger" onClick={handleSignout}> Sign out</Button></Link>
                        </>
                    }
                    {!user.user_id &&
                        <Button className="signinBtn" variant="light"
                            onClick={() => setShow(true)}
                        > Signin </Button>
                    }
                </Nav>
            </header>

            {
                <SigninModal user={user} show={show} handleClose={handleClose} />
            }
        </>
    )
};

export default Header;
