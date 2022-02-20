import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import {useRef} from 'react';

function Modalo({cardInfo, show, handleClose}) {
    const commentInputRef = useRef("");

     console.log(cardInfo)
    // title, readyInMinutes, summary, vegetarian, instructions, sourceUrl, image, comment

     const addToFav = async ()=>{
         let comment = commentInputRef.current.value;
        let fav = {title:cardInfo.title, readyInMinutes:cardInfo.readyInMinutes, summary:cardInfo.summary, vegetarian:cardInfo.vegetarian, instructions:cardInfo.instructions, sourceUrl:cardInfo.sourceUrl, image:cardInfo.image, comment:comment}
       
        await axios.post(`${process.env.REACT_APP_BASE_URL}/addFavRecipe`,fav)
                   .then(()=>{
                       console.log("Done :) ");
                   }).catch((err)=>{
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
                    <div>
                        <label htmlFor="op">Write Your Opinion</label>
                        <input ref={commentInputRef} placeholder="Write Your Opinion" type="text" id="op" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"
                     onClick={()=>{
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