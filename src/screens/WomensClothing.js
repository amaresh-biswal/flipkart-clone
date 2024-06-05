import React, { useEffect, useState } from 'react'
import Card from '../components/Card';

export default function WomensClothing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div>
      <div className="products">
        {products
          .filter(product => product.category === "women's clothing")
          .map((product) => (
            <Card
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
      </div>
    </div>
  )
}
