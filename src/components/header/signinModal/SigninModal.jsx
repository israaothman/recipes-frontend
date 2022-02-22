import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const SigninModal = ({ user, show, handleClose }) => {


    const handleSignin = async () => {
        const userInfo = { username: user.username, password: user.password }
        await axios.post(`${process.env.REACT_APP_BASE_URL}/signin`, userInfo)
            .then(data => {
                user.setUser_id(data.data[0].user_id);
            }).catch(err => {
                console.log(err);
            })

    }

    const handleSignup = async () => {
        const userInfo = { username: user.username, password: user.password }
        await axios.post(`${process.env.REACT_APP_BASE_URL}/signup`, userInfo)
            .then(data => {
                user.setUser_id(data.data[0].user_id);
            }).catch(err => {
                console.log(err);
            })

    }


    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign in</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <div>
                        <p>User Name</p>
                        <input onChange={(e) => user.setUserName(e.target.value)} required/>

                        <p>Password</p>
                        <input type="password" onChange={(e) => user.setPassword(e.target.value)} required/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"
                        onClick={() => {
                            handleSignin();
                            handleClose();
                        }}
                    >
                        Sign in
                    </Button> OR
                    <Button variant="primary"
                        onClick={() => {
                            handleSignup();
                            handleClose();
                        }}
                    >
                        Sign up
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SigninModal;










