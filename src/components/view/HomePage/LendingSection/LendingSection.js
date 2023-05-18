import React from "react"
import './LendingSection.css';
import lennding from '../../../../assets/lennding.png';
import btnLogo from '../../../../assets/logo.png';
import appleLogo from '../../../../assets/appleLogo.png';
import googlePlay from '../../../../assets/googlePlay.png';
function LendingSection(){
     return(
        <div className="Lending ">
          <div className='container-fluid LendingConatainer'>
            <div className='row pb-5'>
              <div className="col-1"></div>
              <div className="col-5 mt-5">
                 <div className="LendingContent">
                     <p>Lending</p>
                     <h3><strong>Compare the loan offers from our Lending Partners </strong> and get them disbursed instantly in your bank accounts</h3>
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
              <div className="col-5 mt-5">
              <img className="lenndingImage" src={lennding} alt="" srcset="" />
              </div>
              {/* <div className="col-1"></div> */}
            </div>
            <div className="row pb-5">
               <div class="row pb-5">
                    <div className="col-1"></div>
                     <div className="col-3">
                       <div className="Compare-Loan-Offers">
                          <h3><span>|</span> Compare Loan Offers</h3>
                          <p>Customers can apply for variety of Instant  and Other loan products offered by our Lending partners on Montra Personal app</p>
                       </div>
                      </div>  
                      <div className="col-3">
                       <div className="Instant-Loan-Disbursements">
                          <h3><span>|</span> Instant Loan Disbursements</h3>
                          <p>Upon successfully submitting loan applications for Instant Loan products, Montra get the amount disbursed into customers’ bank accounts instantly</p>
                       </div>
                      </div>  
                      <div className="col-3">
                       <div className="Track-Loan-Applications">
                          <h3><span>|</span> Track Loan Applications</h3>
                          <p>Customers can track the status of the loans applied on Montra Personal app to see their status</p>
                       </div>
                      </div>  
                      <div className="col-2"></div>
                </div>
                <div class="row mt-5">
                    <div className="col-1"></div>
                     <div className="col-3">
                       <div className="Make-Loan-Repayments">
                          <h3><span>|</span> Make Loan Repayments</h3>
                          <p>Customers can initiate payment of Due monthly installments on Montra Personal app</p>
                       </div>
                      </div>  
                      <div className="col-3">
                       <div className="View-Loan-Statements">
                          <h3><span>|</span> View Loan Statements</h3>
                          <p>Customers can view Loan Statements for all the loans they have availed on Montra Personal app</p>
                       </div>
                      </div>  
                      <div className="col-3">
                       <div className="Get-Payment-Reminders">
                          <h3><span>|</span> Get Payment Reminders</h3>
                          <p>Montra sends alerts reminding Customers to pay against the due & delinquent amounts for them to avoid paying penal charges</p>
                       </div>
                      </div>  
                      <div className="col-2"></div>
                </div>
            </div>
          </div>
        </div>
     )
}
export default LendingSection