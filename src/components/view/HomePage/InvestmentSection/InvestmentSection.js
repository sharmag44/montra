import React from 'react';
import './InvestmentSection.css';
import investment from '../../../../assets/investment.png';
import btnLogo from '../../../../assets/logo.png';
import appleLogo from '../../../../assets/appleLogo.png';
import googlePlay from '../../../../assets/googlePlay.png';
function InvestmentSection() {
    return (   
        <div className="Investment">
         <div className='container-fluid mt-5'>
                 <div className='row'>
                 <div className='col-2'></div>
                    <div className='col-4 mt-5'>
                      <div className='Investment-section'>
                            <p>Investment</p>
                            <h3>Compare  best investment plans available towards maximizing your returns</h3>
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
                    <div className='row mt-5'>
                        <div className='col-6'>
                            <div className='Investment-inside-section'>
                                <h4>Compare Fixed Deposit rates</h4>
                                <p>Customers can compare Fixed Deposit rates available from our Banking Partners and park deposits where the returns are most attractive</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='Investment-inside-section'>
                                <h4>Compare Fixed Deposit rates</h4>
                                <p>Customers can compare Fixed Deposit rates available from our Banking Partners and park deposits where the returns are most attractive</p>
                            </div>
                        </div>
                    </div>
                 </div>
                    <div className='col-5'>
                        <div>
                            <img className='investment-image' src={investment} alt='investment'/>
                        </div>
                    </div>
                    <div className='col-1'></div>
                 </div>
            </div>
        </div>
     )
}

export default InvestmentSection