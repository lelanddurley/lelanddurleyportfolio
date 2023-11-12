import Navbar from "../components/Navbar";
import { useRouter } from 'next/router';
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {router.pathname !== '/link' && <Navbar />} 
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
