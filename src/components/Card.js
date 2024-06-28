import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
  const { title, price, image } = props;
  const truncatedTitle = title.length > 21 ? title.substring(0, 21) + '...' : title;

  return (
    <div className='container'>
      <Link to="/ProductView"
        state={{
          id: props.id,
          title: props.title,
          price: props.price,
          category: props.category,
          description: props.description,
          image: props.image,
        }}
        className='nav-link'
      >
        <div className="card" style={{ width: '12rem' }}>
          <img src={image} className="card-img-top" alt={title} style={{ height: '12rem' }} />
          <div className="card-body">
            <h5 className="card-title">{truncatedTitle}</h5>
            <p className="card-text">Price: ${price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
