import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import React, { useState, useEffect } from 'react'
import logo from "../../assets/montra_logo.png";

export default function Footer() {

    const [country, setCountry] = useState("India");
    const [flag, setFlag] = useState("https://flagcdn.com/in.svg");


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://ipapi.co/json/");
            const data = await response.json();
            if (data) {
                setCountry(data.country_name);
                const countryResponse = await fetch(`https://restcountries.com/v2/alpha/${data.country}`);
                const countryData = await countryResponse.json();
                setFlag(countryData.flag);
            }
        };
        fetchData();
    }, []);
    return <footer className="text-center text-lg-start bg-light text-muted">

        <section className="">
            <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    {/* 1st column */}
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            <img src={logo} alt='montra-logo' />
                        </h6>
                        <div className="location"><i class="fa fa-map-marker"></i>Montra, Inc. United States</div>
                        <div className='logo'>
                            <div className="csm_address"> Montra introduces innovative products solutions that promote Financial
                                Inclusion across emerging economies towards transition from cash to digital payments
                                making accessibility to Credit easy for everyone
                            </div>
                            <div className="sub_text">
                                <p><a href="/" className="text-reset">© Montra</a></p>
                            </div>

                        </div>

                        <section id="lab_social_icon_footer">
                            <div class="container">
                                <div class="text-center center-block">
                                    <a href="https://www.facebook.com/bootsnipp"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
                                    <a href="https://twitter.com/bootsnipp"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
                                    <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
                                    <a href="mailto:#"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
                                </div>
                            </div>
                        </section>

                    </div>
                    {/* 2nd column */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            Mantra App
                        </h6>
                        <div className="sub_heading">Personal</div>
                        <p className="sub_text">
                            <a href="/" className="text-reset">Payments</a>
                        </p>
                        <p className="sub_text">
                            <a href="/" className="text-reset">Banking</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Lending</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Insurance</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Shopping</a>
                        </p>

                        <div className="sub_heading">Business</div>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Personal</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Payments</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Banking</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Lending</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Invoicing</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Inventory Management</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Montra Store</a>
                        </p>

                        <div className="sub_heading">Payment Gateway</div>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Pay with Cards</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Pay with Bank</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Pay with QR</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Pay with Montra</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Pay with Loan</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Inventory Management</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Pricing</a>
                        </p>
                    </div>
                    {/* 3nd column  */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            Platforms
                        </h6>
                        <div className="sub_heading">MoneyLink</div>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Card Issuing</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Loan Management System</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Salary Processing</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Account Management</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Supply Chain Management</a>
                        </p>
                        <div className="sub_heading">DUO</div>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Dual Transaction Service - DTS</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Duo Card Product - DCP</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">DUO App</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">DUO Web Portal</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">DUO Customer Onboarding</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Limit Management</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Collections</a>
                        </p>
                        <div className="sub_heading">Verified</div>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Authenticator App</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Face Authentication</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">KYC ID Verification</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Video KYC Solution</a>
                        </p>
                        {/* 4th column */}
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Company</h6>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">About Montra</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Jobs</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Montra Press</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Become a Partner</a>
                        </p>
                        <h6 className="text-uppercase fw-bold mb-4">Resources</h6>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Demo Montra App</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Explainer Videos</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Developers</a>
                        </p>
                        <h6 className="text-uppercase fw-bold mb-4">Help</h6>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Frequently asked questions</a>
                        </p>
                        <p className="sub_text">
                            <a href="#!" className="text-reset">Support</a>
                        </p>
                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>

                        <p className="sub_text">
                            <a href="#!" className="text-reset">hi@montra.org</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <hr size="2" width="82%" color="black"></hr>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="out_footer">
                <ul>
                    <li> <img style={{ "width": "20px", "marginLeft": '5px' }} src={flag} alt="flag" srcset="" />  {country || "Nigeria"}</li>
                    <li>Privacy policy</li>
                    <li>Terms of use</li>
                    <li>Cookie policy</li>
                    <li>Merchant service agreement</li>
                    <li>Payment protection promise</li>
                </ul>
            </div>
        </section>

    </footer>

}