import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import FindForm from '../FindForm/FindForm';
import PopularHotels from '../PopularHotels/PopularHotels';

const Home = () => {
    const [popularHotels, setPopularHotels] = useState([])
    useEffect(()=> {
        fetch('https://radiant-mesa-95584.herokuapp.com/popularHotels')
        .then(res => res.json())
        .then(data => setPopularHotels(data))
    }, [])
    return (
        <div className="bg-light">
            <div className="container py-5">
            <div className="row">
                <div className="col-md-4">
                    <FindForm/>
                </div>
                <div className="col-md-8 px-md-5">
                    <h2>Popular Hotels</h2>
                    <div className="row">
                        {
                            popularHotels.slice(0, 6).map(popular=> <PopularHotels key={popular._id} popular={popular} />)
                        }
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Home;