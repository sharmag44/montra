import React from 'react';
import './HomePage.css';
import SubHeader from '../../../SubHeader/SubHeader';
import dashboard from '../../../../assets/dashboard.png'
import btnLogo from "../../../../assets/logo.png"
import appleLogo from "../../../../assets/apple logo.png";
import googlePlay from "../../../../assets/googlePlay.png";
import PaymentSection from '../PaymentSection/PaymentSection';
import BankSection from '../BankSection/BankSection';
import InsuranceSection from '../InsuranceSection/InsuranceSection';
import InvestmentSection from '../InvestmentSection/InvestmentSection';
import LendingSection from '../LendingSection/LendingSection';
import ShoppingPage from '../../Shopping/ShoppingPage';

function HomePage() {
    return (
        <div className="Home-Page">
            <div className='container-fluid Home'>
                <SubHeader />
                <div className='row mt-5'>
                    <div className='col-1'></div>
                    <div className='col-5 Home-Page-Heading mt-5'>
                        <h2>Powering Digital Payments Lending for Everyone</h2>
                        <p>Marketplaces for multiparty payments, Lending, Insurance Investment Products</p>
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
                    <div className='col-5'>
                        <img src={dashboard} alt='dashboard' />
                    </div>
                    <div className='col-1'></div>
                </div>
            </div>
            <PaymentSection />
            <BankSection />
            <LendingSection />
            <InsuranceSection />
            <InvestmentSection />
            <ShoppingPage />
        </div>
    )
}

export default HomePage