import React from 'react';
import star from './Star.png'
import './reviews.css'
export default function Reviews() {
    return (

    <div className='review'>
    <p className='review-heading'>
    What Our Customers Say
    </p>
    <div className='review-content'>
        <p className='reviewer-name'>
        “Amit Gulati”
        </p>
        <div className='review-stars'>
            <img src={star}/>
            <img src={star}/>
            <img src={star}/>
            <img src={star}/>
            <img src={star}/>
        </div>
        <p className='reviewer-msg'>
        Step into a world of culinary delights at the London-style food bus near Rajendra Place metro station in Delhi. Indulge in pocket-friendly prices and savor every bite of the mouthwatering dishes. From the first bite to the last, it's a unique experience that will leave you craving for more. Don't miss out on this delicious adventure!" 🚌🍽️✨
        </p>
    </div>
    </div>
 
    )
}