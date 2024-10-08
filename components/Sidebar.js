'use client';  // To ensure Client-side behavior for checkbox and dropdown interaction

import { useState } from 'react';
import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
  // States to manage the visibility of dropdowns
  const [isIdealForOpen, setIsIdealForOpen] = useState(true);

  // Function to toggle the dropdown
  const toggleDropdown = (section) => {
    if (section === 'idealFor') {
      setIsIdealForOpen(!isIdealForOpen);
    }
  };

  return (
    <div className={styles.sidebar}>
      {/* Customization Option */}
      <div className={styles.customization}>
        <label>
          <input type="checkbox" className={styles.checkbox} />
          Customizable
        </label>
      </div>
      <hr className={styles.horizontalLine} />

      {/* IDEAL FOR section */}
      <div className={styles.tab}>
        <div className={styles.tabHeader} onClick={() => toggleDropdown('idealFor')}>
          <span>IDEAL FOR</span>
          <span className={styles.dropdownArrow}>{isIdealForOpen ? '▼' : '▲'}</span>
        </div>
        {isIdealForOpen && (
          <div className={styles.subTabs}>
            <label>
              <input type="checkbox" /> Men
            </label>
            <label>
              <input type="checkbox" /> Women
            </label>
            <label>
              <input type="checkbox" /> Baby & Kids
            </label>
          </div>
        )}
        <div className={styles.subText}>ALL</div>
      </div>
      <hr className={styles.horizontalLine} />

      {/* Other tabs */}
      {['OCCASION', 'WORK', 'FABRIC', 'SEGMENT', 'SUITABLE FOR', 'RAW MATERIALS', 'PATTERN'].map((tab, index) => (
        <div key={index} className={styles.tab}>
          <div className={styles.tabHeader}>
            <span>{tab}</span>
            <span className={styles.dropdownArrow}>▼</span>
          </div>
          <div className={styles.subText}>ALL</div>
          <hr className={styles.horizontalLine} />
        </div>
      ))}
    </div>
  );
}
