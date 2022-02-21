import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useRef } from 'react';
import './modal.css';

function Modalo({ cardInfo, show, handleClose }) {
    const commentInputRef = useRef("");
    const user_id = 1;

    const addToFav = async () => {
        let comment = commentInputRef.current.value;
        let fav = { title: cardInfo.title, readyInMinutes: cardInfo.readyInMinutes, summary: cardInfo.summary, vegetarian: cardInfo.vegetarian, instructions: cardInfo.instructions, sourceUrl: cardInfo.sourceUrl, image: cardInfo.image, comment: comment, user_id:user_id }

        await axios.post(`${process.env.REACT_APP_BASE_URL}/addFavRecipe`, fav)
            .then(() => {
                console.log("Done :) ");
            }).catch((err) => {
                console.log(err);
            });

    }


    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add It To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <h3>{cardInfo.title}</h3>
                    <img alt="" src={cardInfo.image} />
                    <p>Will be ready in : {cardInfo.readyInMinutes} minutes</p>
                    <p> <h5>Instructions:</h5> {cardInfo.instructions}</p>
                    <div>
                        <label htmlFor="op">Write Your Notes</label>
                        <input ref={commentInputRef} placeholder="If you have anything want to add ..." type="text" id="op" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"
                        onClick={() => {
                            addToFav();
                            handleClose();
                        }}
                    > Add To Favorite </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Modalo;