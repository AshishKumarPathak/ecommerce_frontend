// Product.js

import React from 'react';
import './Product.css';

// Dummy product data
export const dummyProducts = Array.from({ length: 15 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  description: `Description for Product ${index + 1}`,
  price: (index + 1) * 10,
  image: `https://via.placeholder.com/150?text=Product+${index + 1}`,
}));
const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  productList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  productItem: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    padding: '15px',
    width: '200px',
    textAlign: 'left',
    backgroundColor: '#ffffff', // Changed background color here
  },
  productImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  },
  productName: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  productDescription: {
    fontSize: '14px',
    color: '#555',
  },
  productPrice: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
  },
};


const Product = () => {
  return (
    <div className='product'>
    <div style={styles.container}>
      <h1>Products</h1>
      <div style={styles.productList}>
        {dummyProducts.map(product => (
          <div key={product.id} style={styles.productItem}>
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <h2 style={styles.productName}>{product.name}</h2>
            <p style={styles.productDescription}>{product.description}</p>
            <p style={styles.productPrice}>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Product;
