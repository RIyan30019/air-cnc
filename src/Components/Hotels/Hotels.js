import React from 'react';
import { useHistory } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Hotels = ({ hotel }) => {
    const [data] = useContext(UserContext);
    const { _id, hotelImg, guests, baths, bedrooms, beds, title, ratings, facilities1, facilities2, price, location } = hotel;
    console.log(hotel)
    let history = useHistory()
    const handleHotels = () => {
        history.push(`/hotelDetails/${_id}`)
    }
    const arrival = new Date(data.arrival)
    const adays = arrival.getDate();
    const amonth = arrival.toLocaleString('default', { month: 'short' });
    const aYear = arrival.getFullYear();
    return (
        <div className="col-12 mb-2">
            <div className='my-2'>
                <p className="m-0 p-0 fs-5">252 Stays {amonth}-{adays}-{aYear} {guests} Guests</p>
                <h3 className='py-2'>Stay {location} Division, Bangladesh</h3>
                <div className='fs-5'>
                    <button className='btn btn-outline-secondary rounded-pill mx-1'>Cancellation Flexibility</button>
                    <button className='btn btn-outline-secondary rounded-pill mx-1'>Type of Place</button>
                    <button className='btn btn-outline-secondary rounded-pill mx-1'>Price</button>
                    <button className='btn btn-outline-secondary rounded-pill mx-1'>Instant Book</button>
                    <button className='btn btn-outline-secondary rounded-pill mx-1'>More Filter</button>
                </div>
            </div>
            <div className="p-2 h-50">
                <div className="row">
                    <div className="col" onClick={handleHotels}>
                        <img src={hotelImg} className="card-img-top w-100 rounded-3" alt="..." />
                    </div>
                    <div className="col">
                        <div className="">
                            <h5 onClick={handleHotels} className="card-title fw-bold">{title}</h5>
                            <p className="card-text">
                                <span>{guests} guests</span>
                                <span>{bedrooms} bedrooms</span>
                                <span>{beds} beds</span>
                                <span>{baths} baths</span>
                            </p>
                            <p className="cart-text">{facilities1}</p>
                            <p className="cart-text">{facilities2}</p>
                            <div className='d-flex justify-content-between'>
                                <p className="cart-text"><AiFillStar className="primary-color" />{ratings}</p>
                                <p className="fw-bold primary-color">${price}/Night</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotels;