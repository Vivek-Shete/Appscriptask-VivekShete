import Head from 'next/head';
import Navbar from '../components/Navbar';  // Import Navbar
import Sidebar from '../components/Sidebar';  // Import Sidebar
import ProductList from '../components/ProductList';
import DiscoverProducts from '../components/DiscoverProducts';  // Import DiscoverProducts
import ProductControls from '../components/ProductControls';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Product Listing Page</title>
        <meta name="description" content="A responsive product listing page built with Next.js." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Product Listing Page",
            "description": "A responsive product listing page built with Next.js."
          })} 
        </script>
      </Head>

      {/* Add the Navbar here */}
      <Navbar />

      <main className={styles.main}>
        {/* Center DiscoverProducts Section */}
        <div className={styles.discoverSection}>
          <DiscoverProducts />
        </div>

        {/* Product Controls Section */}
        <ProductControls />

        {/* Layout with Sidebar and ProductList */}
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            <Sidebar /> {/* Sidebar on the left */}
          </div>

          <div className={styles.productList}>
            <ProductList /> {/* ProductList on the right */}
          </div>
        </div>
      </main>

      {/* Add Footer */}
      <Footer />
    </>
  );
}
