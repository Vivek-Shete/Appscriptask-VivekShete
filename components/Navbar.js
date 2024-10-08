import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* First Row - Logo, Centered Text Logo, and Icons */}
      <div className={styles.topRow}>
        {/* Left Section - Logo */}
        <div className={styles.logo}>
          <img src="./images/logo.png" alt="Logo" />
        </div>

        {/* Center Section - Text LOGO */}
        <div className={styles.textLogo}>
          <span>LOGO</span>
        </div>

        {/* Right Section - Icons */}
        <div className={styles.navIcons}>
          <a href="#"><img src="./images/heart.png" alt="Account" /></a>
          <a href="#"><img src="./images/cart.png" alt="Cart" /></a>
          <a href="#"><img src="./images/profile.png" alt="Language" /></a>
        </div>
      </div>

      {/* Second Row - Centered Navigation Menu */}
      <ul className={styles.navMenu}>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Stories</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  );
}
