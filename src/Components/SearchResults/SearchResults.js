import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';
import Hotels from '../Hotels/Hotels';
import Map from '../Map/Map';

const SearchResults = () => {
    const [hotels, setHotels] = useState([])
    console.log(hotels)
    const [data, setData] = useContext(UserContext)
   useEffect(()=> {
    fetch(`https://radiant-mesa-95584.herokuapp.com/findDataBy/${data.location}`)
    .then(res => res.json())
    .then(data => setHotels(data))
   }, [data.location])
    return (
        <div className="container ">
            <div className="row">
                <div className="col-md-6">
                {
                    hotels.map(hotel => <Hotels hotel={hotel} key={hotel._id} />)
                }
                </div>
                <div className=" h -100 col-md-6">
                    <Map/>
                </div>
            </div>
        </div>
    );
};

export default SearchResults;