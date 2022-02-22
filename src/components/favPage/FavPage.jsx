import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Row, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './favorite.css';
import UpdateModal from './updateModal/UpdateModal'

const Fav = ({ user }) => {

    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [ele, setEle] = useState({});

    const [title, setTitleInput] = useState("");
    const [image, setImageInput] = useState("");
    const [comment, setCommentInput] = useState("");
    const [readyInMinutes, setReadyInMinutes] = useState("");
    const [instructions, setInstructions] = useState("");

    const regex = /(<([^>]+)>)/ig;


    const handleClose = () => setShow(false);

    const getFavRecipes = async () => {
        return await axios.get(`${process.env.REACT_APP_BASE_URL}/favRecipes/${user.user_id}`)
            .then(result => {
                setData(result.data);
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getFavRecipes();
    }, []);


    const deleteFromFav = async (id) => {
        await axios.delete(`${process.env.REACT_APP_BASE_URL}/deleteFavRecipe/${id}`)
            .then(() => {
                getFavRecipes();
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <div className='fav-div'>
                {data.length !== 0 &&
                    <Container className='div-container'>
                        <h2 className='noResult'>Your Favorite  Recipes : </h2>
                        <Row md={3}>

                            {
                                data.map((ele) => (
                                    <Col key={ele.id} md={4}>
                                        <Card className='div-card'>
                                            <Card.Img className='div-card-img' variant="top" src={ele.image} />
                                            <Card.Body>
                                                <Card.Title className='div-card-title'>{ele.title}</Card.Title>
                                                <Card.Link className='div-card-link'>
                                                    {ele.sourceUrl}
                                                </Card.Link>
                                                <Card.Text className='card-text'>
                                                    {ele.summary.split('.')[0].replace(regex, '')}. &nbsp;
                                                    <Card.Link className='div-card-link' href={ele.sourceUrl} target="_blank">read more</Card.Link>
                                                </Card.Text>
                                                <h6>
                                                    Your Notes : {ele.comment}
                                                </h6>
                                                <div>
                                                    <Button className='div-card-button' variant="primary"
                                                        onClick={() => {
                                                            setShow(true)
                                                            setEle(ele);
                                                            setTitleInput(ele.title);
                                                            setCommentInput(ele.comment);
                                                            setImageInput(ele.image);
                                                            setReadyInMinutes(ele.readyinminutes);
                                                            setInstructions(ele.instructions);
                                                        }}
                                                    >Update</Button>
                                                    <Button className='div-card-button' variant="danger"
                                                        onClick={() => deleteFromFav(ele.id)}
                                                    >Delete</Button>

                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>

                    </Container>
                }
                {
                    !data.length && <div className='noResult vHieght'>

                        <h2>You don't have any Recipes :( </h2>
                        <Button>  <Link className='link' to="/">Go To Home Page</Link> </Button>
                    </div>
                }

                {
                    <UpdateModal show={show} handleClose={handleClose} ele={ele} getFavRecipes={getFavRecipes} user={user}
                        titleInput={title}
                        setTitleInput={setTitleInput}
                        imageInput={image}
                        setImageInput={setImageInput}
                        commentInput={comment}
                        setCommentInput={setCommentInput}
                        readyInMinutes={readyInMinutes}
                        setReadyInMinutes={setReadyInMinutes}
                        instructions={instructions}
                        setInstructions={setInstructions}

                    />
                }
            </div>
        </>
    )
}

export default Fav;