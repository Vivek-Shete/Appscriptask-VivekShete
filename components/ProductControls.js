'use client';  // Add this directive at the top to make it a Client Component

import { useState } from 'react';
import styles from '../styles/ProductControls.module.css';

export default function ProductControls() {
  const [filterVisible, setFilterVisible] = useState(true);
  const [selectedSort, setSelectedSort] = useState('RECOMMENDED');

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

  return (
    <div className={styles.container}>
      <hr className={styles.horizontalLine} />
      
      <div className={styles.controls}>
        {/* Left Side - Item Count and Hide Filter */}
        <div className={styles.leftControls}>
          <span>{filterVisible ? '3425 items' : 'Items'}</span>
          <button onClick={toggleFilter} className={styles.filterButton}>
            {filterVisible ? 'Hide Filter' : 'Show Filter'}
          </button>
        </div>

        {/* Right Side - Recommended Dropdown */}
        <div className={styles.rightControls}>
          {/* <label htmlFor="sortSelect" className={styles.sortLabel}>Recommended</label> */}
          <select
            id="sortSelect"
            value={selectedSort}
            onChange={handleSortChange}
            className={styles.sortDropdown}
          >
            <option value="RECOMMENDED">RECOMMENDED</option>
            <option value="NEWEST_FIRST">NEWEST FIRST</option>
            <option value="POPULAR">POPULAR</option>
            <option value="PRICE_HIGH_TO_LOW">PRICE: HIGH TO LOW</option>
            <option value="PRICE_LOW_TO_HIGH">PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div>

      <hr className={styles.horizontalLine} />
    </div>
  );
}
