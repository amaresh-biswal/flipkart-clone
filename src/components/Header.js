import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Header() {
  return (
    <div>
      <div className="card-header" style={{ position: 'relative', height: '75px', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
      <Link className="nav-link active" aria-current="page" to="/">
        <img
          src='https://1000logos.net/wp-content/uploads/2021/02/Flipkart-Logo-2007.png'
          style={{ height: '80px', marginLeft: '50px' }}
          alt='Network Issue'
        />
        </Link>
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          style={{
            marginLeft: '20px',
            padding: '5px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            flex: '1',
            backgroundColor:'#F0F5FF'
          }}
        />
        <div style={{ marginLeft: '20px', display: 'flex', alignItems: 'center', marginRight: '50px' }}>
          <a href="#login" style={{ marginRight: '20px', textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}>
            <i className="bi bi-person-circle" style={{ fontSize: '24px', marginRight: '5px' }}></i>
            Login
          </a>
          <a href="#cart" style={{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}>
            <i className="bi bi-cart3" style={{ fontSize: '24px', marginRight: '5px' }}></i>
            Cart
          </a>
        </div>
      </div>
    </div>
  );
}
