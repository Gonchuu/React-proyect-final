import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sports.css';


const Users = () => {
  const [numPage, setNumPage] = useState(1);
  const [porPagina] = useState(6);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");


  //función para traer los datos de la API
  const URL = "https://628fb307dc47852365454a59.mockapi.io/character";

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    //console.log(data)
    setUsers(data);

  };



  //función de búsqueda
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  //metodo de filtrado
  const results = !search
    ? users
    : users.filter((dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
      );

  useEffect(() => {
    showData();
  }, [numPage]);

  const handlePrev = () => {
    setNumPage(numPage => numPage - 1);
  }

  const handleNext = () => {
    setNumPage(numPage => numPage + 1);
  }

  return (
    <>

  <h2 className='title-sports'>SPORTS</h2>
    <div>
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Search"
        className="form-control"
      />
      <div>
        {results.slice (
          (numPage - 1) * porPagina,
          (numPage - 1) * porPagina + porPagina
          ).map((user) => (
          <button className='button-sports' key={user.id}>
          <Link to={`${user.id}`}>{user.name}</Link>
          </button>
        ))}
      </div>
      <div>
        <button className='pagbutton' onClick={handlePrev}>Prev</button>
        <span>{numPage}</span>
        <button className='pagbutton' onClick={handleNext}>Next</button>
      </div>

    </div>
  </>
  )
}

export default Users