import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { FiSearch } from 'react-icons/fi';
import './Navbar.css';
const Navbar = ({ location }) => {
    const [data] = useContext(UserContext);
    //date
    const arrival = new Date(data.arrival);
    const adays = arrival.getDate();
    const amonth = arrival.toLocaleString('default', { month: 'short' });
    const aYear = arrival.getFullYear();
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white border ">
            <div className="container">
                <Link className="navbar-brand fw-bold fs-2 primary-color" to='/'>Aircnc</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse fw-bold fs-5" id="navbarNav">
                    {location &&
                        <div className='mx-auto d-flex'>
                            <input type="text" className='me-1 py-3 px-3 rounded w-100 text-center shadow-sm' value={`${data.location} Division, Bangladesh`} />

                            <input type="text" className='me-1 py-3 px-0 rounded w-100 text-center shadow-sm border border-star-1' value={`${amonth} ${adays}-${aYear}`} />

                            <input type="text" className='me-1 py-3 px-0 rounded w-100 text-center shadow-sm border border-star-1' value={`${data.guests} Guests`} />

                        </div>
                    }
                    <ul className="navbar-nav ms-auto">
                        {!location &&
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/">Host your Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/">Host your experience</Link>
                                </li>
                            </>
                        }
                        <li className="nav-item">
                            <Link className="nav-link " to="/help">Help</Link>
                        </li>
                        <li className="nav-item">
                            {data.email &&
                                <Link className="nav-link btn px-4 fs-5 text-white bg d-inline-block rounded-pill" to="/login">Log Out</Link>
                            }
                            {!data.email &&
                                <Link className="nav-link btn px-4 fs-5 text-white bg d-inline-block rounded-pill" to="/login">Log in</Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;