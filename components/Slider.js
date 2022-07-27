import Image from 'next/image';
import Slider from "react-slick";

import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';

import styles from './../styles/Slider.module.css';

import tablet from '../public/image/tablet.jpg';
import tvscreen from '../public/image/tvscreen.jpg';
import camera from '../public/image/camera.jpg';
import headphone from '../public/image/headphone.jpg';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#aa0e1c", borderRadius: "2px" }}
        onClick={onClick}
      />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#aa0e1c", borderRadius: "2px" }}
        onClick={onClick}
      />
    );
  }

export default function CardSlide() {

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
      };

  return (
    <div className={styles.container}>
        <Slider {...settings}>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={tablet} width={140} height={140} name='' alt='tablet' />
            </div>
            <h3 className="py-3">تابلت هواوي</h3>
          </div>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={tvscreen} width={140} height={140} name='' alt='' />
            </div>
            <h3 className="py-3">تلفون سامسونج</h3>
          </div>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={camera} width={140} height={140} name='' alt='' />
            </div>
            <h3 className="py-3">كاميرا كانون</h3>
          </div>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={headphone} width={140} height={140} name='' alt='' />
            </div>
            <h3 className="py-3">سماعة راس</h3>
          </div>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={tablet} width={140} height={140} name='' alt='tablet' />
            </div>
            <h3 className="py-3">تابلت هواوي</h3>
          </div>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={tvscreen} width={140} height={140} name='' alt='' />
            </div>
            <h3 className="py-3">تلفون سامسونج</h3>
          </div>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={camera} width={140} height={140} name='' alt='tablet' />
            </div>
            <h3 className="py-3">كاميرا كانون</h3>
          </div>
          <div className={styles.slideCardItem}>
            <div className={styles.cardImg} >
                <Image src={tvscreen} width={140} height={140} name='' alt='' />
            </div>
            <h3 className="py-3">تلفون سامسونج</h3>
          </div>
        </Slider>
      </div>
  );
}
