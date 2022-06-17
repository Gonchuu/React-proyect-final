import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './SportsDetail.css';


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
        <div className='containerr'>
            {isLoading ? <p>Loading...</p> : <>
            <img className='containerr-img' src={sports.strSportThumb} alt="img-profile"/>
            <p className='containerr-p'><b>Name:</b> {sports.name}</p>
            <p className='containerr-p'><b>Description:</b>: {sports.strSportDescription}</p>
            </>}
        </div>
    )
}

export default SportsDetail