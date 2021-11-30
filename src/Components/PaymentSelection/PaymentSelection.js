import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Cart from '../Cart/Cart';
import PaymentCard from '../PaymentCard/PaymentCard';
import { IoIosArrowForward } from 'react-icons/io';
const PaymentSelection = () => {
    const [data] = useContext(UserContext)
    return (
        <section>
            <div className="container">
            <div className="py-3 fs-5 fw-bold">
                <p>
                <span>1. Reviews House Rules</span> 
                <IoIosArrowForward/>
                <span>2. Who's Coming</span>
                <IoIosArrowForward/>
                <span>2. Confirm and Pay</span>
                </p>
            </div>
                <div className="row">
                    <div className="col-md-6">
                        <PaymentCard/>
                    </div>
                    <div className="col-md-6">
                        <Cart details={data} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaymentSelection;