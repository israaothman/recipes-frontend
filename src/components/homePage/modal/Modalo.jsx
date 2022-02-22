import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useRef } from 'react';
import './modal.css';

const Modalo = ({ cardInfo, show, handleClose, user }) => {
    const commentInputRef = useRef("");
    const regex = /(<([^>]+)>)/ig;
    const addToFav = async () => {
        let comment = commentInputRef.current.value;
        let fav = { title: cardInfo.title, readyInMinutes: cardInfo.readyInMinutes, summary: cardInfo.summary.split('.')[0].replace(regex, ''), vegetarian: cardInfo.vegetarian, instructions: cardInfo.instructions.split('.')[0].replace(regex, ''), sourceUrl: cardInfo.sourceUrl, image: cardInfo.image, comment: comment, user_id: user.user_id }

        await axios.post(`${process.env.REACT_APP_BASE_URL}/addFavRecipe`, fav)
            .then(() => {
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
                    <p> <h5>Instructions :</h5> {cardInfo?.instructions?.split('.')[0]?.replace(regex, '')}</p>
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