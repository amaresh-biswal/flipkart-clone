import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#FFFFFF",margin:'15px' }}>
                <div className="container-fluid">
                    {/* <Link className="navbar-brand" to="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav w-100 d-flex justify-content-between">
                            <li className="nav-item text-center flex-fill">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/flipkart-icon.png" alt="Home" style={{ width: '50px' ,height:'50px'}} /><br />
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item text-center flex-fill">
                                <Link className="nav-link active" to="/Electronics">
                                    <img src="https://3.imimg.com/data3/KN/PG/MY-14481158/laptop-sales-500x500.png" alt="Electronics" style={{ width: '50px',height:'50px' }} /><br />
                                    Electronics
                                </Link>
                            </li>
                            <li className="nav-item text-center flex-fill">
                                <Link className="nav-link active" to="/Jewelery">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbIUQCmUr3uWiqpCSGXmUfGpPra8R80Oe9EQ&s" alt="Jewelery" style={{ width: '50px',height:'50px' }} /><br />
                                    Jewelery
                                </Link>
                            </li>
                            <li className="nav-item dropdown text-center flex-fill">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSC4tt_E03oiU1ViitdGSOX-ohTpbuXeYj-LB468zwLo92q43ZE" alt="Clothing" style={{ width: '50px',height:'50px' }} /><br />
                                    Clothing
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/MensClothing">Men's Clothing</Link></li>
                                    <li><Link className="dropdown-item" to="/WomensClothing">Women's Clothing</Link></li>
                                    {/* <li><hr className="dropdown-divider"/></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li> */}
                                </ul>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                            </li> */}
                        </ul>
                        {/* <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    );
}
