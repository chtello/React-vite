
import  { useState, useEffect } from 'react';
import Card from './Card';

function Cartelera() {
  const [pelis, setPelis] = useState([]);
  useEffect(() => {
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=e4a8ac2b')
        .then(res => res.json())
        .then(json => setProductos(json)); 
}, []);

<input type="text"/>

}


export default Cartelera;
