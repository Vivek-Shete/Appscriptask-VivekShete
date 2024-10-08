import Sidebar from '../components/Sidebar'; // Import Sidebar

export default function Home() {
  return (
    <>
      {/* Other components */}
      <main className={styles.main}>
        <div className={styles.layout}>
          <Sidebar />  {/* Add Sidebar on the left */}
          <ProductList /> {/* Your ProductList on the right */}
        </div>
      </main>
    </>
  );
}
