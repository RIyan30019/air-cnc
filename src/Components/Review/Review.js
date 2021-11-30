import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Cart from '../Cart/Cart';
import { IoIosArrowForward } from 'react-icons/io';
import './Review.css';

const Review = () => {
    const [data] = useContext(UserContext)
    let history = useHistory()
    const movePage = () => {
        history.push('/whoComing')
    }
    console.log(data)
    const arrival = new Date(data.arrival)
    const adayString = arrival.getDate();
    const amonth = arrival.toLocaleString('default', { month: 'short' })
    const adays = arrival.toLocaleString('default', { weekday: 'long' })


    const departure = new Date(data.departure)
    const ddayString = departure.getDate();
    const dmonth = departure.toLocaleString('default', { month: 'short' })
    const ddays = departure.toLocaleString('default', { weekday: 'long' })

    return (
        <div className='container'>
            <div className="py-3 fs-5 fw-bold">
                <p>
                    <span>1. Reviews House Rules</span>
                    <IoIosArrowForward />
                    <span className="text-muted">2. Who's Coming</span>
                    <IoIosArrowForward />
                    <span className="text-muted">2. Confirm and Pay</span>
                </p>
            </div>
            <div className="row ">
                <div className="col-md-6">
                    <div className='border-bottom border-secondary pb-3'>
                        <h2>Review house rules</h2>
                        <h4> {data.diffInDays} nights in {data.location}</h4>
                        <div className="row my-3 fs-5">
                            <div className="col-md-6 d-flex mb-2 mb-md-0">
                                <div className="date">
                                    <h5>{amonth}</h5>
                                    <p>{adayString}</p>
                                </div>
                                <div className="check">
                                    <p>{adays} Check-In</p>
                                    <p>After 12.00 PM</p>
                                </div>
                            </div>
                            <div className="col-md-6 d-flex">
                                <div className="date">
                                    <h5>{dmonth}</h5>
                                    <p>{ddayString}</p>
                                </div>
                                <div className="check">
                                    <p>{ddays} Checkout</p>
                                    <p>After 12.00 PM</p>
                                </div>
                            </div>
                        </div>
                        <p>Self check-in with building staff</p>
                        <div className="row">
                            <div className="col-md-6"></div>
                            <div className="col-md-6"></div>
                        </div>
                    </div>
                    <div className="pt-3">
                        <h3>Things to keep in mind</h3>
                        <p className="text-muted">Suitable for children and infants</p>
                        <p className="text-muted">Pets allowed</p>
                        <p className="text-muted">No parties or events</p>
                        <p className="text-muted">Smoking allowed</p>
                        <a href="/" className="text-primary text-decoration-none">Read more </a>
                    </div>
                    <button onClick={movePage} type="button" className="btn bg text-white fs-5 mt-5">Agree and Continue</button>
                </div>
                <div className="col-md-6">
                    <Cart details={data} handleReserve={false} />
                </div>
            </div>
        </div>
    );
};

export default Review;