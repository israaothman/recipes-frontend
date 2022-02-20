import { useState, useRef, useEffect } from 'react'; // first import useRef 
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import './searchbox.css';


function SearchBox({setData}) {
  const [search, setSearch] = useState("");
  // create element for the ref
  const inputRef = useRef(null);
  // inputRef is an object and if you want to access it's element use .current 
  const handleFilter = async(event)=>{
     event.preventDefault();
     try{
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/searchRecipes?search=${search}`);
        setData(result.data);
     
      } catch(err){
        console.log(err);
     }

  }

useEffect(()=>{
  // console.log(inputRef.current);
  inputRef.current.focus();
},[])
 

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