import React from 'react'
import { useLocation } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

export default function ProductView() {
    const location = useLocation();
    const { title, price,description,image } = location.state || {};
    console.log(description)
    return (
        <div>
            <div className="card mb-3" style={{maxWidth: "100%"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start">
                            <h5 className="card-title">{title}</h5>
                            <h3>${price}</h3>
                            <p className="card-text">{description}</p>
                            <button 
                            style={{
                                backgroundColor:"#FF9F00",
                                color:"white",
                                padding:"10px",
                                fontWeight:"bold",
                                borderRadius:"10px",
                                marginRight:"10px"
                                }}><ShoppingCartIcon/>ADD TO CART</button>
                            <button 
                            style={{
                                backgroundColor:"#FB641B",
                                color:"white",
                                padding:"10px",
                                fontWeight:"bold",
                                borderRadius:"10px"
                                }}><FlashOnIcon/>BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
