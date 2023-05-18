import React from 'react'
import './SubHeader.css';
import { Link } from "react-router-dom";

function SubHeader() {
    return (

        <div className="Header-section">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">

                <div className="container-fluid" style={{ "marginLeft": "18rem" }}>

                    <div className='row'>
                        <div className='col-2'>
                            <div className="sub-header-button">
                                <button>Personal</button>
                                <button>Business</button>
                            </div>
                        </div>
                        <div className='col-9 sub-header-heading'>
                            <ul className="navbar-nav me-auto">
                                <li className="sub-header-nav-item">
                                    <Link className="sub-nav-link px-3" to="/payment">Payment</Link >
                                </li>
                                <li className="nav-item">
                                    <Link className="sub-nav-link px-3" to="/banking">Banking</Link >
                                </li>
                                <li className="nav-item">
                                    <Link className="sub-nav-link px-3" to="/lending">Lending</Link >
                                </li>
                                <li className="nav-item">
                                    <Link className="sub-nav-link px-3" to="/insurance">Insurance</Link >
                                </li>
                                <li className="nav-item">
                                    <Link className="sub-nav-link px-3" to="/investment">Investment</Link >
                                </li>
                                <li className="nav-item">
                                    <Link className="sub-nav-link px-3" to="/shopping">Shopping</Link >
                                </li>
                            </ul>
                        </div>
                        <div className='col-1 sign-in'>
                            <button>Montra Sign in</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default SubHeader