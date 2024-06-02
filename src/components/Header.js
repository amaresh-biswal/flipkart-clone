import React from 'react';

export default function Header() {
  return (
    <div>
      <div className="card-header" style={{ position: 'relative', height: '50px' , backgroundColor:"#FFFFFF"}}>
        <img
          src='https://1000logos.net/wp-content/uploads/2021/02/Flipkart-Logo-2007.png'
          style={{ 
            height: '50px', 
            position: 'absolute', 
            top: '10px',
            left: '10px' 
          }}
          alt='Network Issue'
        />
      </div>
    </div>
  );
}
