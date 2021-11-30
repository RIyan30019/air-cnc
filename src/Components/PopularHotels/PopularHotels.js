import React from 'react';

const PopularHotels = ({popular}) => {
        const {hotelImg, title, price} = popular;
    return (
        <div className="col-md-4 mb-2" >
            <div className="card border-0 h-100" >
                <img src={hotelImg} className="card-img-top w-100" alt="..." />
                <div className="card-body p-2">
                    <p className="card-title">{title}</p>
                    <p className="fw-bold primary-color">${price}</p>
                </div>
            </div>
        </div>
    );
};

export default PopularHotels;