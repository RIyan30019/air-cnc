import React from 'react';
import { useContext } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { UserContext } from '../../App';
import { AiFillPlusSquare } from 'react-icons/ai';
import { AiFillMinusSquare } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';


const Cart = ({ details, handleReserve }) => {
    // const {price, ratings} = details;

    let history = useHistory()

    const [data, setData] = useContext(UserContext);
    console.log(data)
    const { register, handleSubmit, formState: { errors } } = useForm();

    // calculate days
    const startDate = data.arrival;
    const endDate = data.departure;
    const diffInMs = new Date(endDate) - new Date(startDate)
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    // cart calculation
    const totalNight = parseInt(diffInDays) * details?.price;
    const cleaningFee = 10;
    const serviceFee = 21;
    const total = totalNight + cleaningFee + serviceFee;

    const newCart = {
        ...data,
        ...details,
        diffInDays: diffInDays,
        cleaningFee: cleaningFee,
        serviceFee: serviceFee,
        total: total,
        totalNight: totalNight
    }

    const onSubmit = data => {
        setData(newCart)
        history.push('/review')
    };

    console.log(data)
    return (
        <div className="cart shadow p-3 rounded-3">
            <form className='p-3' onSubmit={handleSubmit(onSubmit)}>
                { !handleReserve &&
                    <div className="d-flex">
                        <h3>{data.title}</h3>
                        <img src={data.hotelImg} className="w-25" alt="" />
                    </div>
                }
                <div>
                    <p className="fw-bold text-primary">${details?.price}/night</p>
                    <p ><AiFillStar className="primary-color" /> {details?.ratings} (20 Reviews)</p>
                </div>
                <div>
                    <label htmlFor="dates" class="form-label fw-bold text-secondary">Date</label>
                    <div className="row border">
                        <div className="col-md-5">
                            <input type="date" defaultValue={data.arrival} class="form-control border-0 d-inline fs-5" />
                        </div>
                        <div className="col-md-2 d-flex align-items-center justify-content-center"><BsArrowRight className="p-0 m-0 fs-5" /></div>
                        <div className="col-md-5">
                            <input type="date" defaultValue={data.departure} class="form-control border-0 d-inline fs-5" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="col-6 d-flex align-items-center">
                            <label htmlFor="babies" className="form-label p-0 m-0 fw-bold text-secondary">BABIES</label>
                        </div>
                        <div className="col-6">
                            <div className="input-group ms-auto fw-bold">
                                <button type="button" className="btn"><AiFillMinusSquare className="fs-4" /></button>
                                <input type="number" name="babiesCount" defaultValue={data.babiesCount} className="form-control text-center p-0 m-0 border-0 fs-5" ></input>
                                <button type="button" className="btn"><AiFillPlusSquare className="fs-4" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 d-flex align-items-center">
                            <label htmlFor="babies" className="form-label p-0 m-0 fw-bold text-secondary">CHILDS</label>
                        </div>
                        <div className="col-6">
                            <div className="input-group ms-auto fw-bold">
                                <button type="button" className="btn"><AiFillMinusSquare className="fs-4" /></button>
                                <input type="number" name="babiesCount" defaultValue={data.childCount} className="form-control text-center p-0 m-0 border-0 fs-5" ></input>
                                <button type="button" className="btn"><AiFillPlusSquare className="fs-4" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 d-flex align-items-center">
                            <label htmlFor="babies" className="form-label p-0 m-0 fw-bold text-secondary">ADULTS</label>
                        </div>
                        <div className="col-6">
                            <div className="input-group ms-auto fw-bold">
                                <button type="button" className="btn"><AiFillMinusSquare className="fs-4" /></button>
                                <input type="number" name="babiesCount" defaultValue={data.adultsCount} className="form-control text-center p-0 m-0 border-0 fs-5" ></input>
                                <button type="button" className="btn"><AiFillPlusSquare className="fs-4" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between fw-bold p-3 border-bottom">
                        <span className="col-md-6"><span>$</span>{details?.price} x {diffInDays} night</span>
                        <span className="col-md-6 ms-auto text-end">${totalNight}</span>
                    </div>
                    <div className="row d-flex justify-content-between fw-bold p-3 border-bottom">
                        <span className="col-md-6">Cleaning Fee</span>
                        <span className="col-md-6 ms-auto text-end">${cleaningFee}</span>
                    </div>
                    <div className="row d-flex justify-content-between fw-bold p-3 border-bottom">
                        <span className="col-md-6">Service Fee</span>
                        <span className="col-md-6 ms-auto text-end">${serviceFee}</span>
                    </div>
                    <div className="row d-flex justify-content-between fw-bold p-3 border-bottom">
                        <span className="col-md-6">Total</span>
                        <span className="col-md-6 ms-auto text-end">${total}</span>
                    </div>
                </div>
                {handleReserve &&
                    <button type="submit" className="btn bg w-100 mt-2">Reserve</button>
                }
            </form>
        </div>
    );
};

export default Cart;