import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Row, Card, Col } from 'react-bootstrap';
import SearchBox from './searchbox/SearchBox';
import Modalo from './modal/Modalo';
import './Home.css';


const Home = ({ user }) => {
    const [data, setData] = useState([]);
    const [cardInfo, setCardInfo] = useState({});
    const [show, setShow] = useState(false);

    const regex = /(<([^>]+)>)/ig;

    const handleClose = () => setShow(false);

    const getAllRecipes = async () => {
        return await axios.get(`${process.env.REACT_APP_BASE_URL}/`)
            .then(result => {
                return result.data;
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        void (async () => {
            let data = await getAllRecipes();
            setData(data);
        })();
    }, []);


    return (
        <>

            <section className="hero">
                <h1>Don't know what to cook today ?</h1>
                <h2>Scroll down to explore our recipes ...</h2>
            </section>

            <div className="searchH3">
                <h3>Searching for a specific recipe ? </h3>
                <SearchBox setData={setData} />

            </div>
            <h3>All Recipes :  </h3>
            <Container className='div-container'>
                <Row md={3}>
                    {
                        data.length !== 0 && data.map((ele) => (
                            <Col key={ele.id} md={4} >
                                <Card className='div-card'>
                                    <Card.Img className='div-card-img' variant="top" src={ele.image} />
                                    <Card.Body>
                                        <Card.Title className='div-card-title'>{ele.title}</Card.Title>
                                        <Card.Text>
                                            {ele.summary.split('.')[0].replace(regex, '')}. &nbsp;
                                            <Card.Link className='div-card-link' href={ele.sourceUrl} target="_blank">read more</Card.Link>
                                        </Card.Text>
                                        <div>
                                            {user.user_id !== 0 &&
                                                <Button className='div-card-button' variant="primary"
                                                    onClick={() => {
                                                        setCardInfo(ele)
                                                        setShow(true);
                                                    }}>Add To Favorite</Button>
                                            }
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            {
                <Modalo cardInfo={cardInfo} show={show} handleClose={handleClose} user={user} />
            }
            {
                !data.length && <div><h2>No Such Results, Please try again later</h2></div>
            }
        </>
    )
}

export default Home;