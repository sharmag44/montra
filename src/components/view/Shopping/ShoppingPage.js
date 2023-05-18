import React from 'react'
import "./ShoppingPage.css";
import ShoppingImage from "../../../assets/shopping.png"
export default function ShoppingPage() {
  return (
    <div className='Shopping'>
      <div className='container-fluid mt-5'>
        <div className='row'>
          <div className='col-6 md-6 sm-6 shoppingPart'>
            <img className="" src={ShoppingImage} alt='shoppingImage' />
          </div>
          <div className='col-6 md-6 sm-6 sideText'>
            <h5 className='main__title'>Shopping</h5>
            <h3 className='title'>Connect to sellers on
              Montra app for exciting deals</h3>
            <p className='title__text'>Montra shoppers can find what they are looking for online and in person. From delivering fresh produce to their doorstep to creating and distributing movies, music, and more, we are always finding new ways to delight our customers.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
