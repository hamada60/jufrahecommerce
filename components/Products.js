import Image from 'next/image';
import Link from 'next/link';
import styles from './../styles/Products.module.css';

import { BsShare, BsArrowClockwise, BsHeartFill } from 'react-icons/bs';
import { FaEye } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { MdAccessTimeFilled, MdLocationPin, MdShoppingCart } from 'react-icons/md';


import img1 from '../public/image/1.jpg';
import img2 from '../public/image/2.jpeg';
import img3 from '../public/image/3.jpg';
import img4 from '../public/image/4.jpg';
import img5 from '../public/image/5.png';
import img6 from '../public/image/6.jpg';

import tablet from '../public/image/tablet.jpg';
import tvscreen from '../public/image/tvscreen.jpg';
import camera from '../public/image/camera.jpg';
import headphone from '../public/image/headphone.jpg';


export default function Navbar() {
  return (
    <div className={styles.container}>
        <div style={{color: '#aa0e1c', marginBottom: '25px'}}>
          <h3>الإعـلانـات الـممـيـزة :</h3>
        </div>
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="col">
            <div className="card" style={{boxShadow: 'rgba(12, 11, 11, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}>
                <Image src={tablet} alt='' className="card-img-top p-4" width={200} height={160} name='' />
                <div className={styles.heart}>
                    <p><BsHeartFill style={{fontSize: '20px'}} /></p>
                </div>
                <div className={styles.featured}>
                  <p className="px-3">ممــيز</p>
                </div>
                <div className="card-body" style={{padding: 0}}>
                    <h5 className="card-title p-2 m-0" style={{color: '#aa0e1c'}}>لينوفو p8 تاب بلس TB</h5>
                    <p className="card-text p-2 m-0"><MdLocationPin style={{color: '#aa0e1c', fontSize: '20px'}} /> رياض السعودية</p>
                    <p className="card-text p-2 m-0"><MdShoppingCart style={{color: '#aa0e1c', fontSize: '20px'}} /> متاحة للبيع</p>
                    <p className="card-text p-2 m-0"><small className="text-muted"><MdAccessTimeFilled style={{color: '#aa0e1c', fontSize: '20px'}} />  06/09/2021 05:23 PM</small></p>
                    <div className="card-footer m-0" style={{color: '#0EAA13', fontSize: '20px', fontWeight: '500', padding: 0, textAlign: 'center'}}>
                        <p style={{margin: '5px 0'}}>329.99 مصـري</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{boxShadow: 'rgba(12, 11, 11, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}>
                <Image src={tvscreen} alt='tvscreen' className="card-img-top p-4" width={200} height={160} name='' />
                <div className={styles.heart}>
                    <p><BsHeartFill style={{fontSize: '20px'}} /></p>
                </div>
                <div className={styles.featured}>
                  <p className="px-3">ممــيز</p>
                </div>
                <div className="card-body" style={{padding: 0}}>
                    <h5 className="card-title p-2 m-0" style={{color: '#aa0e1c'}}>لينوفو p8 تاب بلس TB</h5>
                    <p className="card-text p-2 m-0"><MdLocationPin style={{color: '#aa0e1c', fontSize: '20px'}} /> رياض السعودية</p>
                    <p className="card-text p-2 m-0"><MdShoppingCart style={{color: '#aa0e1c', fontSize: '20px'}} /> متاحة للبيع</p>
                    <p className="card-text p-2 m-0"><small className="text-muted"><MdAccessTimeFilled style={{color: '#aa0e1c', fontSize: '20px'}} />  06/09/2021 05:23 PM</small></p>
                    <div className="card-footer m-0" style={{color: '#0EAA13', fontSize: '20px', fontWeight: '500', padding: 0, textAlign: 'center'}}>
                        <p style={{margin: '5px 0'}}>329.99 مصـري</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{boxShadow: 'rgba(12, 11, 11, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}>
                <Image src={camera} alt='camera' className="card-img-top p-4" width={200} height={160} name='' />
                <div className={styles.heart}>
                    <p><BsHeartFill style={{fontSize: '20px'}} /></p>
                </div>
                <div className={styles.featured}>
                  <p className="px-3">ممــيز</p>
                </div>
                <div className="card-body" style={{padding: 0}}>
                    <h5 className="card-title p-2 m-0" style={{color: '#aa0e1c'}}>لينوفو p8 تاب بلس TB</h5>
                    <p className="card-text p-2 m-0"><MdLocationPin style={{color: '#aa0e1c', fontSize: '20px'}} /> رياض السعودية</p>
                    <p className="card-text p-2 m-0"><MdShoppingCart style={{color: '#aa0e1c', fontSize: '20px'}} /> متاحة للبيع</p>
                    <p className="card-text p-2 m-0"><small className="text-muted"><MdAccessTimeFilled style={{color: '#aa0e1c', fontSize: '20px'}} />  06/09/2021 05:23 PM</small></p>
                    <div className="card-footer m-0" style={{color: '#0EAA13', fontSize: '20px', fontWeight: '500', padding: 0, textAlign: 'center'}}>
                        <p style={{margin: '5px 0'}}>329.99 مصـري</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{boxShadow: 'rgba(12, 11, 11, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}>
                <Image src={tablet} alt='' className="card-img-top p-4" width={200} height={160} name='' />
                <div className={styles.heart}>
                    <p><BsHeartFill style={{fontSize: '20px'}} /></p>
                </div>
                <div className={styles.featured}>
                  <p className="px-3">ممــيز</p>
                </div>
                <div className="card-body" style={{padding: 0}}>
                    <h5 className="card-title p-2 m-0" style={{color: '#aa0e1c'}}>لينوفو p8 تاب بلس TB</h5>
                    <p className="card-text p-2 m-0"><MdLocationPin style={{color: '#aa0e1c', fontSize: '20px'}} /> رياض السعودية</p>
                    <p className="card-text p-2 m-0"><MdShoppingCart style={{color: '#aa0e1c', fontSize: '20px'}} /> متاحة للبيع</p>
                    <p className="card-text p-2 m-0"><small className="text-muted"><MdAccessTimeFilled style={{color: '#aa0e1c', fontSize: '20px'}} />  06/09/2021 05:23 PM</small></p>
                    <div className="card-footer m-0" style={{color: '#0EAA13', fontSize: '20px', fontWeight: '500', padding: 0, textAlign: 'center'}}>
                        <p style={{margin: '5px 0'}}>329.99 مصـري</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{boxShadow: 'rgba(12, 11, 11, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}>
                <Image src={headphone} alt='headphone' className="card-img-top p-4" width={200} height={160} name='' />
                <div className={styles.heart}>
                    <p><BsHeartFill style={{fontSize: '20px'}} /></p>
                </div>
                <div className={styles.featured}>
                  <p className="px-3">ممــيز</p>
                </div>
                <div className="card-body" style={{padding: 0}}>
                    <h5 className="card-title p-2 m-0" style={{color: '#aa0e1c'}}>لينوفو p8 تاب بلس TB</h5>
                    <p className="card-text p-2 m-0"><MdLocationPin style={{color: '#aa0e1c', fontSize: '20px'}} /> رياض السعودية</p>
                    <p className="card-text p-2 m-0"><MdShoppingCart style={{color: '#aa0e1c', fontSize: '20px'}} /> متاحة للبيع</p>
                    <p className="card-text p-2 m-0"><small className="text-muted"><MdAccessTimeFilled style={{color: '#aa0e1c', fontSize: '20px'}} />  06/09/2021 05:23 PM</small></p>
                    <div className="card-footer m-0" style={{color: '#0EAA13', fontSize: '20px', fontWeight: '500', padding: 0, textAlign: 'center'}}>
                        <p style={{margin: '5px 0'}}>329.99 مصـري</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className={styles.showMore} style={{fontWeight: 800, fontSize: '16px'}}><Link href=''>الــمــزيــد</Link><BsArrowClockwise style={{color: '#aa0e1c', fontSize: '20px', marginRight: '4px'}} /></div>
    </div>
  )
}
