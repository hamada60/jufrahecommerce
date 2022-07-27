import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Navbar from './../components/Navbar.js';
import Products from './../components/Products.js';
import Slider from './../components/Slider.js';
import ShowMore from './../components/ShowMore.js';
import Footer from '../components/Footer.js';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Ecommerce Jufrah</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar />
      <Products />
      <Slider />
      <ShowMore />
      <Footer />
    </div>
  )
}
