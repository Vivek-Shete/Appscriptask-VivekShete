import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* Newsletter Signup Section */}
        <div className={styles.newsletter}>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettà muse.</p>
          <div className={styles.signupForm}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        {/* Contact Section */}
        <div className={styles.contact}>
          <h3>CONTACT US</h3>
          <p>+44 221 133 5890</p>
          <p>customercare@mettamuse.com</p>
          <p>CURRENCY</p>
          <p>🇺🇸 USD</p>
        </div>

        {/* Quick Links Section */}
        <div className={styles.quickLinks}>
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="#">Orders & Shipping</a></li>
            <li><a href="#">Join/Login as a Seller</a></li>
            <li><a href="#">Payment & Pricing</a></li>
            <li><a href="#">Return & Refunds</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className={styles.followUs}>
          <h3>FOLLOW US</h3>
          <div className={styles.socialIcons}>
            <a href="#"><img src="/images/insta.png" alt="insta" /></a>
            <a href="#"><img src="/images/linkdin.png" alt="Instagram" /></a>
          </div>
          <h4>mettà muse ACCEPTS</h4>
          <div className={styles.paymentMethods}>
            <img src="/images/mpay.png" alt="Visa" />
            <img src="/images/paypal.png" alt="MasterCard" />
            <img src="/images/amex.png" alt="Amex" />
            <img src="/images/applepay.png" alt="Paypal" />
            <img src="/images/pay.png" alt="Paypal" />
          </div>
        </div>

      </div>
      
      {/* Copyright Section */}
      <div className={styles.copyright}>
        <p>&copy; 2023 mettàmuse. All rights reserved.</p>
      </div>
    </footer>
  );
}

