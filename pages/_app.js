import '../styles/globals.css';
import BottomNav from '../components/BottomNav';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <BottomNav />
    </div>
  );
}

export default MyApp;