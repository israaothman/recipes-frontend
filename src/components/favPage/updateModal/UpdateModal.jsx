import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const UpdateModal = ({ show, handleClose, ele, getFavRecipes, user,
    titleInput,
    setTitleInput,
    imageInput,
    setImageInput,
    commentInput,
    setCommentInput,
    readyInMinutes,
    setReadyInMinutes,
    instructions,
    setInstructions
}) => {

    const update = async (id) => {

        let updated = { title: titleInput, readyInMinutes: ele.readyInMinutes, summary: ele.summary, vegetarian: ele.vegetarian, instructions: ele.instructions, sourceUrl: ele.sourceUrl, image: imageInput, comment: commentInput, user_id: user.user_id }

        await axios.put(`${process.env.REACT_APP_BASE_URL}/updateFavRecipe/${id}`, updated)
            .then(() => {
                getFavRecipes();
            }).catch(err => {
                console.log(err);
            })
    }


    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add It To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <div>
                        <p>Edit Title</p>
                        <input value={titleInput} onChange={(e) => setTitleInput(e.target.value)} />
                        <p style={{ "marginTop": "10px" }}>Edit Image Link</p>
                        <textarea value={imageInput} onChange={(e) => setImageInput(e.target.value)} />
                        <p>Edit Time To Prepare</p>
                        <input value={readyInMinutes} onChange={(e) => setReadyInMinutes(e.target.value)} />
                        <p>Edit Instructions</p>
                        <input value={instructions} onChange={(e) => setInstructions(e.target.value)} />
                        <label htmlFor="op">Edit Your Notes</label>
                        <textarea value={commentInput} onChange={(e) => setCommentInput(e.target.value)} placeholder="Write Your Opinion" type="text" id="op" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"
                        onClick={() => {
                            update(ele.id);
                            handleClose();
                        }}
                    >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdateModal;










