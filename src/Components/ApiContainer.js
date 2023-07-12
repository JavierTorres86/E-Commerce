import {useState,useEffect} from 'react';
import ApiCard from './ApiCard';
import  Container from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';

const ApiContainer = () => {
    const [personaje,setPersonaje]=useState([]);
    const getPersonajes = async()=>{
        const response = await fetch ('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        setPersonaje(data.results)
        console.log(data)
    }
    useEffect(()=>{
        getPersonajes()
    },[])
    
  return (
    <Container fluid>
        <Row>
        {personaje.map(p=> <ApiCard

        key={p.id}
        username={p.name}
        image={p.image}
        />)}
        </Row>

    </Container>
    
  )
}

export default ApiContainer