import React from 'react';
import './InsuranceSection.css';
import issurance from '../../../../assets/issurance.png';
import btnLogo from '../../../../assets/logo.png';
import appleLogo from '../../../../assets/appleLogo.png';
import googlePlay from '../../../../assets/googlePlay.png';
function IssuranceSection() {
    return (
        <div className="Issurance">
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-4'>
                        <div>
                            <img className='issurance-image' src={issurance} alt='issurance' />
                        </div>
                    </div>
                    <div className='col-4 mt-5'>
                        <div className='issurance-section'>
                            <p>Insurance</p>
                            <h3>Compare Insurance Policy Premiums and Features to buy the most suitable plan from our Insurance Partners</h3>
                            <div className='row btn__main '>
                                <div className='col-4'>
                                    <p className='download'>Download</p>
                                </div>
                                <div className='col-4 '>
                                    <img className="btnLogo" src={btnLogo} alt="" srcset="" />
                                </div>
                                <div className='col-1'>
                                    <img src={appleLogo} alt="" srcset="" />
                                </div>
                                <div className='col-1'>
                                    <img src={googlePlay} alt="" srcset="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'></div>
                </div>
                <div className='row mt-5'>
                    <div className='col-2'></div>
                    <div className='col-3'>
                        <div className='Compare-Insurance-Plans'>
                            <h4><span>| </span>Compare Insurance Plans</h4>
                            <p>Customers can apply for variety of Insurance Products and compare the plans for the premium amounts and features towards making a more informed decision</p>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='View-Policy-Details'>
                            <h4><span>| </span>View Policy Details</h4>
                            <p>Now customers can find details of all the polices purchased on Montra Personal app in their pocket</p>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='Renew-Insurance-Policies'>
                            <h4><span>| </span>Renew Insurance Policies</h4>
                            <p>Customers can easily renew the existing policies on Montra Personal app</p>
                        </div>
                    </div>
                    <div className='col-1'></div>
                </div>
            </div>
        </div>
    )
}

export default IssuranceSection