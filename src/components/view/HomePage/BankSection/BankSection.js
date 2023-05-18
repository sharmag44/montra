import React from 'react'
import bankingImage from "../../../../assets/banking.png";
import agentBanking from "../../../../assets/agencyBanking.png";
import btnLogo from "../../../../assets/montraFinal.png";
import appleLogo from "../../../../assets/appleLogo.png";
import googlePlay from "../../../../assets/googlePlay.png"
import "./Bank.css"
function BankSection() {
    const mystyle = {
        margin : "13% 0px 0px 0px"
      };
    return (
        <div className='Bank'>
            <div className='container-fluid'>
                <div className='row'>
                  <div className='col-2'></div>
                    <div className='col-4 sideBox' style={mystyle}>
                        <h6 className='title'>Banking</h6>
                        <h2 className='subTitle'><strong>Open a bank account instantly</strong> with our partner banks and operate through our Agent Network</h2>
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
                    <div className='col-4'>
                        <img className="bankImage" src={bankingImage} alt="" srcset="" />
                    </div>
                    <div className='col-2'></div>
                </div>

            </div>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-5'>
                    <img src={agentBanking} alt="agentBanking" srcset="" />
                </div>
                <div className='col-5'>
                    <div className='row'>
                        <div class="col-6 padding__space">
                            <h4 className='card__box__title'>Account Opening</h4>
                            <div class="pay_sec"><p>Customers can open a bank account instantly with any of our parner banks</p></div>
                        </div>
                        <div class="col-6 padding__space">
                            <h4 className='card__box__title'>KYC</h4>
                            <div class="pay_sec"><p>Customers can submit documents and complete kyc through Montra personal app for the newly opened account</p></div>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="col-6 padding__space">
                            <h4 className='card__box__title'>Agency Banking</h4>
                            <div class="pay_sec"><p>Scan QR code of any Montra Merchant using Personal App and simply make payment directly from any of your bank Accounts</p></div>
                        </div>
                        <div class="col-6 padding__space">
                            <h4 className='card__box__title'>Agency  Banking Statement</h4>
                            <div class="pay_sec"><p>Scan QR code of any Montra Merchant using Personal App and simply make payment directly from any of your bank Accounts</p></div>
                        </div>
                    </div>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
    )
}

export default BankSection;