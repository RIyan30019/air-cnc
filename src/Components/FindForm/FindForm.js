import React, { useState } from 'react';
import './FindForm.css'
import { AiFillPlusSquare } from 'react-icons/ai';
import { AiFillMinusSquare } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom';

const FindForm = () => {
    const [data, setData] = useContext(UserContext)
    const [adults, setAdults] = useState(2)
    const [childs, setChilds] = useState(2)
    const [babies, setBabies] = useState(2)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    let history = useHistory()

    const onSubmit = formValue => {
        const formData = {
            ...formValue, 
            adultsCount: adults,
            childCount: childs, 
            babiesCount: babies,
            guests: adults + babies + childs
        }
        setData(formData)

        history.push('/searchByLocation')
    };

    
    console.log(data)

    // Arrival Date
    const currentDate = new Date();
    const date = currentDate.toISOString().substr(0, 10);

    // Departure Date
    var today = new Date();
    var numberOfDaysToAdd = 3;
    today.setDate(today.getDate() + numberOfDaysToAdd);
    var departure = today.toISOString().substr(0, 10);

    return (
        <div>
            <h4 className="mb-4">Where do you want to go</h4>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-2 bg-white p-2 rounded">
                    <label htmlFor="location" className="form-label p-0 m-0 fw-bold">Location</label>
                    <input type="text" name='location' className="form-control border-0 p-0 m-0" placeholder="add Division Based In Bangladesh" {...register("location", { required: true })} />
                </div>
                <div className="mb-2 p-2 row">
                    <div className="bg-white col-md-6  rounded p-2">
                        <label htmlFor="arrival" className="form-label p-0 m-0 fw-bold text-secondary">Arrival</label>
                        <input type="date" defaultValue={date} name="arrival" className="form-control border-0 p-0 m-0" {...register("arrival")} />
                    </div>
                    <div className="bg-white col-md-6  rounded p-2">
                        <label htmlFor="arrival" className="form-label p-0 m-0 fw-bold text-secondary">Departure</label>
                        <input type="date" defaultValue={departure} name="departure" className="form-control border-0 p-0 m-0" {...register("departure")} />
                    </div>
                </div>
                <div className="mt-2 bg-white p-2 rounded">
                    <label htmlFor="guests" className="form-label p-0 m-0 fw-bold text-secondary">Guests</label>
                    <div>
                        {adults > 0 && <span className="fw-bold">{adults} ADULTS, </span>}
                        {childs>0 && <span className="fw-bold">{childs} CHILDS, </span>}
                        {babies>0 && <span className="fw-bold">{babies} BABIES</span>}
                    </div>
                </div>
                <div className="bg-white p-2 rounded">
                    <div className="row">
                        <div className="col-6 d-flex align-items-center">
                            <label htmlFor="adults" className="form-label p-0 m-0 fw-bold text-secondary">ADULTS</label>
                        </div>
                        <div className="col-6">
                            <div className="input-group ms-auto fw-bold">
                                <button type="button" onClick={()=> setAdults(adults > 0 && adults-1)} className="btn"><AiFillMinusSquare className="fs-4" /></button>
                                <input type="number" name="adultsCount" className="form-control text-center p-0 m-0 border-0" value={adults} {...register("adultsCount")}  ></input>
                                <button type="button" onClick={()=> setAdults(adults+1)}  className="btn"><AiFillPlusSquare className="fs-4" /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-2 rounded">
                    <div className="row">
                        <div className="col-6 d-flex align-items-center">
                            <label htmlFor="child" className="form-label p-0 m-0 fw-bold text-secondary">CHILD</label>
                        </div>
                        <div className="col-6">
                            <div className="input-group ms-auto fw-bold">
                                <button type="button" onClick={()=> setChilds(childs > 0 && childs-1)} className="btn"><AiFillMinusSquare className="fs-4" /></button>
                                <input type="number" name="childCount" className="form-control text-center p-0 m-0 border-0" value={childs} ></input>
                                <button type="button" onClick={()=> setChilds(childs+1)} className="btn"><AiFillPlusSquare className="fs-4" /></button>
                            </div>
                        </div>
                    </div>
                    <span>Age 2-12</span>
                </div>
                <div className="bg-white p-2 rounded">
                    <div className="row">
                        <div className="col-6 d-flex align-items-center">
                            <label htmlFor="babies" className="form-label p-0 m-0 fw-bold text-secondary">BABIES</label>
                        </div>
                        <div className="col-6">
                            <div className="input-group ms-auto fw-bold">
                                <button type="button" onClick={()=> setBabies(babies > 0 && babies-1)} className="btn"><AiFillMinusSquare className="fs-4" /></button>
                                <input type="number" name="babiesCount" className="form-control text-center p-0 m-0 border-0" value={babies} ></input>
                                <button type="button" onClick={()=> setBabies(babies+1)} className="btn"><AiFillPlusSquare className="fs-4" /></button>
                            </div>
                        </div>
                    </div>
                    <span>Younger tha 2</span>
                </div>

                <button type="submit" className="btn w-100 bg"><BsSearch /> Search</button>
            </form>
        </div>
    );
};

export default FindForm;