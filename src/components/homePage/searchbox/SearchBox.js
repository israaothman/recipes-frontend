import { useState, useRef } from 'react'; // first import useRef 
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import './searchbox.css';


function SearchBox({setData}) {
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);
  const handleFilter = async(event)=>{
     event.preventDefault();
     try{
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/searchRecipes?search=${search}`);
        setData(result.data);
     
      } catch(err){
        console.log(err);
     }

  }

 

  return (
    <>
      <Form className="form" onSubmit={handleFilter} >
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={inputRef} value={search} type="text" placeholder="Search" 
            onChange={(event)=> {
              setSearch(event.target.value)
            }
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </>
  )
}

export default SearchBox;