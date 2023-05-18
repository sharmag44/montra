import React from 'react'
import "./PaymentSection.css";
import paymentImg from "../../../../assets/payments.png";
import scanAndPay from "../../../../assets/scanAndPay.png";
import btnLogo from "../../../../assets/montraFinal.png";
import appleLogo from "../../../../assets/appleLogo.png";
import googlePlay from "../../../../assets/googlePlay.png"

function paymentSection() {
    
    return (
        <div className='paymentSection'>
            <div class="container">
                <div class="row mt-5">
                    <div class="col-5">
                        <p className='title-payment'>Payments</p>
                        <div>
                            <h4 className='subTitle__payment '>
                                Pay anyone directly from your
                                <strong> bank accounts</strong> or linked <strong>cards</strong>
                            </h4>

                            <div className='row btn__main '>
                                <div className='col-4'>
                                    <p className='download'>Download</p>
                                </div>
                                <div className='col-4 '>
                                    <img className="btnLogo" src={btnLogo} alt="" srcset="" />
                                </div>
                                <div className='col-1'>
                                    <img className="googleLogo"
                                        src={appleLogo} alt="" srcset="" />
                                </div>
                                <div className='col-1'>
                                    <img className="googleLogo" src={googlePlay} alt="" srcset="" />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div className='payment'>
                            <img className="payment__image" src={paymentImg} alt='payment' />
                        </div>
                    </div>
                    <div class="col-3">

                        <div className='scan'>
                            <img className="scan__image" src={scanAndPay} alt='payment' /></div>
                    </div>
                </div>



                <div className='container card__box '>
                    <div class="row">
                        <div class="col-3 padding__class">
                            <i class="fa-brands fa-facebook"></i>
                            <h4 className='cad__box__title'>Scan Pay</h4>
                            <div class="pay_sec"><p>Scan QR code of any Montra Merchant using Personal App & simply make payment directly</p></div>
                        </div>
                        <div class="col-3 padding__class">
                            <i class="fa-brands fa-facebook"></i>
                            <h4 className='cad__box__title'>Fund Transfer</h4>
                            <div class="pay_sec"><p>Transfer Funds to any bank account directly from your bank accounts linked to your App</p></div>

                        </div>
                        <div class="col-3 padding__class">
                            <i class="fa-brands fa-facebook"></i>
                            <h4 className='cad__box__title'>Chat Pay</h4>
                            <div class="pay_sec"><p>Chat with other Montra users & send or receive payments while chatting</p></div>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3 padding__class">
                            <i class="fa-brands fa-facebook"></i>
                            <h4 className='cad__box__title'>Payment Marketplace</h4>

                            <div class="pay_sec"><p>Our payment Marketplace offers access to payment services such as buy Airtime, Data & DTH .</p></div>

                        </div>
                        <div class="col-3 padding__class">
                            <i class="fa-brands fa-facebook"></i>
                            <h4 className='cad__box__title'>Transaction History</h4>

                            <div class="pay_sec"><p>Get an easy access to track all your transactions on your Personal Montra app.</p></div>

                        </div>
                        <div class="col-3 padding__class">
                            <i class="fa-brands fa-facebook"></i>
                            <h4 className='cad__box__title'>Payment Reminders</h4>
                            <div class="pay_sec"><p>Get an easy access to track all your transactions on your Personal Montra app</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div >


    )
}

export default paymentSection