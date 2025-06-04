import { Work_Sans } from 'next/font/google'
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const workSans = Work_Sans({
    subsets: ['latin'],
    display: 'swap'
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={workSans.className}>
        <Component {...pageProps} />
    </main>
  );
}

export default MyApp;