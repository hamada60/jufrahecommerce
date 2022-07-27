import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;



import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div lang="ar-EG" dir="rtl">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
