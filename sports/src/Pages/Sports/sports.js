import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Users = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [numPage, setNumPage] = useState(1);
  const [sportsList, setSportsList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getUsers = async () => {
      const response = await fetch(`https://628fb307dc47852365454a59.mockapi.io/character`);
      const  results    = await response.json();
      console.log(results) 
      setSportsList(results);
      setIsLoading(false)
    }
    getUsers();
  }, [numPage]);

  const handlePrev = () => {
    setNumPage(numPage => numPage - 1);
  }

  const handleNext = () => {
    setNumPage(numPage => numPage + 1);
  }

  return (
    <div>
      <h3>Characters list</h3>
      {isLoading ? <p>Cargando...</p> :
      <ul>
        {sportsList?.length > 0 ? sportsList.map(({ id, name }) =>
          <button className='button-character' key={id}>
            <Link to={`${id}`}>{name}</Link>
          </button>
        ) : <p>El listado está vacío</p>}
      </ul>}
      <div>
        <button onClick={handlePrev}>Prev</button>
        <span>{numPage}</span>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}


export default Users