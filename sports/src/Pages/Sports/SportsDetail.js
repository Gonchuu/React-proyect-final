import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const SportsDetail = () => {
    const { idUser } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [sports, setSports] = useState({});

    useEffect(() => {
      setIsLoading(true);
      const getUser = async () => {
        const response = await fetch(`https://628fb307dc47852365454a59.mockapi.io/character/${idUser}`);
        const data = await response.json();
        setSports(data);
        setIsLoading(false)
      }
      getUser();
    }, [idUser]);

    return (
        <div>
            {isLoading ? <p>Cargando...</p> : <>
            <img src={sports.strSportThumb} alt="img-profile"/>
            <p>Name: {sports.name}</p>
            <p>strSportDescription: {sports.strSportDescription}</p>
            </>}
        </div>
    )
}

export default SportsDetail