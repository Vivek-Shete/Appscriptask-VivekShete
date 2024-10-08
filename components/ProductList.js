// components/ProductList.js
import styles from '../styles/Home.module.css';

const products = [
  { id: 1, name: 'Product 1', img: './images/prod1.png', price: '$100' },
  { id: 2, name: 'Product 2', img: './images/prod2.png', price: '$200' },
  { id: 3, name: 'Product 3', img: './images/prod3.png', price: '$300' },
  { id: 4, name: 'Product 3', img: './images/prod4.png', price: '$300' },
  { id: 5, name: 'Product 3', img: './images/prod5.png', price: '$300' },
  { id: 6, name: 'Product 3', img: './images/prod6.png', price: '$300' },
  { id: 7, name: 'Product 3', img: './images/prod7.png', price: '$300' },
  { id: 8, name: 'Product 3', img: './images/prod8.png', price: '$300' },
  { id: 9, name: 'Product 3', img: './images/prod9.png', price: '$300' },
  { id: 10, name: 'Product 3', img: './images/prod10.png', price: '$300' },
  { id: 11, name: 'Product 3', img: './images/prod11.png', price: '$300' },
  { id: 12, name: 'Product 3', img: './images/prod12.png', price: '$300' },
  { id: 13, name: 'Product 3', img: './images/prod13.png', price: '$300' },
  { id: 14, name: 'Product 3', img: './images/prod14.png', price: '$300' },
  { id: 15, name: 'Product 3', img: './images/prod15.png', price: '$300' },
  { id: 16, name: 'Product 3', img: './images/prod16.png', price: '$300' },
  { id: 17, name: 'Product 3', img: './images/prod17.png', price: '$300' },
  { id: 18, name: 'Product 3', img: './images/prod18.png', price: '$300' },

];

export default function ProductList() {
  return (
    <section className={styles.productList}>
      {products.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </section>
  );
}
