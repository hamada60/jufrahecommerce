import styles from './../styles/Footer.module.css';
import Image from 'next/image';

import { BsTelephone, BsWhatsapp } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { GrLocation } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import { FaTwitter, FaInstagram } from 'react-icons/fa';


import appstore from '../public/image/appstore.jpeg';
import appgallery from '../public/image/appgallery.jpeg';
import googleplay from '../public/image/googleplay.jpeg';

export default function Footer() {
  return (
    <div style={{background: 'rgba(0,0,0,.1)' }}>
      <div className={styles.container}>
        <footer className="py-5">
          <div className="row">
            <div className="col-1">
              <h5>حســابي</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">أنشر إعلان</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">إعلاناتى</a></li>
              </ul>
            </div>
            <div className="col-2">
              <h5 style={{visibility: 'hidden'}}>إخفاء</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">الإعلانات المفضلة</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">القسائـم</a></li>
              </ul>
            </div>
            <div className="col-2">
              <h5>روابط سـريعة</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">تسجــيل الدخول / تسجــيل</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">الاعدادات</a></li>
              </ul>
            </div>
            <div className="col-1">
              <h5 style={{visibility: 'hidden'}}>إخفاء</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">معلومات عنا</a></li>
              </ul>
            </div>
            <div className="col-2">
              <h5>تـواصـل معنـا</h5>
              <ul className="list-unstyled d-flex my-3">
                <li className="ms-3"><a className="link-dark" href="#"><FaTwitter /></a></li>
                <li className="ms-3"><a className="link-dark" href="#"><FaInstagram /></a></li>
                <li className="ms-3"><a className="link-dark" href="#"><BsWhatsapp /></a></li>
              </ul>
            </div>
            <div className="col-3">
              <h5 style={{visibility: 'hidden'}}>إخفاء</h5>
              <ul className="list-unstyled d-flex my-3">
                <li className="ms-1"><a href="#" className="nav-link p-0 text-muted">< Image src={appstore} /></a></li>
                <li className="ms-1"><a href="#" className="nav-link p-0 text-muted">< Image src={appgallery} /></a></li>
                <li className="ms-1"><a href="#" className="nav-link p-0 text-muted">< Image src={googleplay} /></a></li>
              </ul>
            </div>
          </div>
          <div className=" py-1 my-1 border-top">
            <p className="text-center text-muted">&copy; 2021 Company, Inc</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
