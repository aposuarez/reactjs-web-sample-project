import { Work_Sans } from 'next/font/google'
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const workSans = Work_Sans({
    subsets: ['latin'],
    display: 'swap'
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={workSans.className}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
    </main>
  );
}

export default MyApp;