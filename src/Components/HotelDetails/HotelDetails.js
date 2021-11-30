import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { BiHome } from 'react-icons/bi';
import { ImCheckboxChecked } from 'react-icons/im';
import { GiVacuumCleaner } from 'react-icons/gi';
import { BsPersonFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import Cart from '../Cart/Cart';
import { useContext } from 'react';
import { UserContext } from '../../App';


const HotelDetails = () => {
    const [details, setDetails] = useState({})
    const { _id, hotelImg, ownerImg, owner, baths, bedrooms, beds, guests, ratings, title, location } = details;
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://radiant-mesa-95584.herokuapp.com/hotelDetails/${id}`)
            .then(res => res.json())
            .then(data => setDetails(...data))
    }, [id])
    return (
        <div>
            <div class="mb-3">
                <div className="" style={{ height: '75vh' }}>
                    <img src={hotelImg} class="card-img-top w-100 h-100" alt="..." />
                </div>
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md-6">
                            <div class="card-body">
                                <div className="d-flex justify-content-between border-bottom">
                                    <div className="w-75">
                                        <h6 class="card-title fs-4">{title}</h6>
                                        <p className="text-secondary fs-4">{location}, Bangladesh</p>
                                        <p className="text-secondary">
                                            <span className="px-1">{guests} Guests </span>
                                            <span className="px-1">{bedrooms} Bedrooms </span>
                                            <span className="px-1">{beds} Beds </span>
                                            <span className="px-1">{baths} Baths </span>
                                        </p>
                                    </div>
                                    <div className="w-25">
                                        <img src={ownerImg} alt="" className="w-75 rounded-circle" />
                                        <span className="text-muted d-block">{owner}</span>
                                    </div>
                                </div>
                                <div className='py-2 d-flex'>
                                    <div className="me-2">
                                        <BiHome className="fs-3" />
                                    </div>
                                    <div>
                                        <h5>Entire Home</h5>
                                        <p className="text-muted">
                                            You'll have the condominium to yourself.
                                </p>
                                    </div>
                                </div>
                                <div className='py-2 d-flex'>
                                    <div className="me-2">
                                        <ImCheckboxChecked className="fs-4" />
                                    </div>
                                    <div>
                                        <h5>Self check-in</h5>
                                        <p className="text-muted">
                                            You can check in with the doorman
                                    </p>
                                    </div>
                                </div>
                                <div className='py-2 d-flex'>
                                    <div className="me-2">
                                        <GiVacuumCleaner className="fs-3" />
                                    </div>
                                    <div>
                                        <h5>Sparking clean</h5>
                                        <p className="text-muted">
                                            10 recent guests said this place was sparkling clean.
                                </p>
                                    </div>
                                </div>
                                <div className='py-2 d-flex'>
                                    <div className="me-2">
                                        <BsPersonFill className="fs-3" />
                                    </div>
                                    <div>
                                        <h5>{owner} is a Superhost</h5>
                                        <p className="text-muted">
                                            superhosts are exprienced, highly rated hosts who are committed to providing great stays for guests.
                                </p>
                                    </div>
                                </div>
                                <p className="text-card">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo eos ut modi explicabo distinctio delectus aliquid itaque nostrum. Porro, soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis laboriosam cumque, quae ad et voluptatum exercitationem beatae corporis ullam harum.
                            </p>
                                <a href="/" className='text-decoration-none text-primary'>
                                    Read more about the place
                            </a>
                                <p className='fw-bold my-3 fs-5'>
                                    Review <br />
                                    <span><AiFillStar className="primary-color" /> {ratings}</span>
                                </p>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <Cart key={_id} details={details} handleReserve={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;