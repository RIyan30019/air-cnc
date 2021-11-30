import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Cart from '../Cart/Cart';
import { IoIosArrowForward } from 'react-icons/io';
const WhoComing = () => {
    const [data] = useContext(UserContext)
    const { owner, ownerImg } = data;
    let history = useHistory();
    const shiftPayment = () => {
        history.push('/payments')
    }
    return (
        <div className="container">
            <div className="py-3 fs-5 fw-bold">
                <p>
                    <span>1. Reviews House Rules</span>
                    <IoIosArrowForward />
                    <span>2. Who's Coming</span>
                    <IoIosArrowForward />
                    <span className="text-muted">2. Confirm and Pay</span>
                </p>
            </div>
            <div className="row ">
                <div className="col-md-6 pt-md-5">
                    <h2>Travelling for work?</h2>
                    <div className="row pt-3">
                        <div className="col-md-6">
                            <div>
                                <p>Say hello to your host</p>
                                <p>Let "{owner}" know a little about yourself and  why you're coming.</p>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <div className="w-100 align-self-center">
                                <img src={ownerImg} className="w-25 rounded-circle text-end ms-auto ms-3" alt="" />
                                <br />
                                <span>{owner}</span>
                            </div>
                        </div>
                    </div>
                    <div className="pt-3 overflow-hidden">
                        <textarea name="" cols="40" rows="5" placeholder={`Hello ${owner} Can't wait spend 4 night is your home`}></textarea>
                    </div>
                    <button onClick={shiftPayment} type="button" className='btn bg mt-2'>Continue</button>
                </div>
                <div className="col-md-6">
                    <Cart details={data} />
                </div>
            </div>
        </div>
    );
};

export default WhoComing;