import React from 'react';
import './flipcard.css';
export default function FlipCard() {
    return(
        <div id="container">
       
        <div className="card">
          <div className="card-content front  blue">
            <p>Standardization and predictability</p>
          </div>
          <div className="card-content back red">
            <p>Food Bus of India's unique model ensures extreme standardization in both operating expenses (OPEX) and capital expenses (CAPEX)</p>
          </div>
        </div>
        
 
        <div className="card ">
          <div className="card-content front red">
            <p>Standardization and predictability</p>
          </div>
          <div className="card-content back blue">
            <p>Food Bus of India's unique model ensures extreme standardization in both operating expenses (OPEX) and capital expenses (CAPEX)</p>
          </div>
        </div>
         
        <div className="card">
          <div className="card-content front  blue">
            <p>Standardization and predictability</p>
          </div>
          <div className="card-content back red">
            <p>Food Bus of India's unique model ensures extreme standardization in both operating expenses (OPEX) and capital expenses (CAPEX)</p>
          </div>
        </div>

        <div className="card">
          <div className="card-content front  red">
            <p>Standardization and predictability</p>
          </div>
          <div className="card-content back blue">
            <p>Food Bus of India's unique model ensures extreme standardization in both operating expenses (OPEX) and capital expenses (CAPEX)</p>
          </div>
        </div>
      </div>
    );
}