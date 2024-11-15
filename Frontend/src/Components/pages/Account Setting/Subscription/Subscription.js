import React from 'react';
import Slidenavbar from '../Sildenavbar/Slidenavbar';
import './Subscription.css'

const Subscription = () => {
  return (
    <div  className='Subscription-main-container'>
      <Slidenavbar></Slidenavbar>
      <div className='left-side-container-Subscription'>
        <div className='sub-flied-side-1'>
            <h2>Need help or want to change your <br></br>subscription?</h2>
            <br></br>
            <p>844-673-7863</p>
        </div>
        <div className='sub-flied-side-2'>
       
            <h3>Contact us 7 days a week</h3>
            <p>Monday-Friday: 8am to 8pm (Central),</p>
            <p>Saturday: 8am to 5pm (Central),</p>
            <p>Sunday: 10am to 6pm (Central)</p>
        </div>
        <div>
        <h2>
      Subscription
    </h2>
    <hr></hr>
    <p>Account id:</p>
    <hr></hr>
    <p>Subscription status</p>
    <hr></hr>
    <p>Registration Date:
    </p>
    </div>

    </div>
   
    </div>
    
  );
}

export default Subscription;
