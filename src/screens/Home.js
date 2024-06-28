import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import './screens_css/home_style.css';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const categories = [...new Set(products.map(product => product.category))];

  

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="product-container" style={{ margin: '15px' }}>
      {categories.map((category, index) => (
        <div key={index} className="category">
          <h2>{capitalizeFirstLetter(category)}</h2>
          <div className="products">
            {products
              .filter(product => product.category === category)
              .map((product) => (
                <Card
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  category={product.category}
                  description={product.description}
                  image={product.image}
                />
              ))}
          </div>
        </div>
      ))}
      
    </div>
  );
}
