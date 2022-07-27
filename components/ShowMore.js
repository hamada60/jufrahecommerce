import styles from './../styles/ShowMore.module.css';

import Image from 'next/image';
import Link from 'next/link';

import { BsArrowClockwise, BsHeartFill } from 'react-icons/bs';
import { MdAccessTimeFilled, MdLocationPin, MdShoppingCart } from 'react-icons/md';

import tablet from '../public/image/tablet.jpg';
import tvscreen from '../public/image/tvscreen.jpg';
import camera from '../public/image/camera.jpg';
import headphone from '../public/image/headphone.jpg';

export default function LatestProduct() {
  return (
    <div className={styles.container}>
        <div>
            <h3 style={{color: '#aa0e1c', fontSize: '36px', padding: '1px'}}>أحدث الإعلانات: <small style={{color: '#7C7C7C', fontSize: '24px', marginRight: '2rem'}}>أكتشف أحدث الإعلانات المنشورة من قبل معلنينا</small></h3>
        </div>
        <div className={styles.gridContainer}>
            <div className={styles.menu}>
                <div className='' style={{background: '#E6B325', marginLeft: '2rem', width: '239px', height: '759px', borderRadius: '15px'}}>Google ADS</div>
                <div className='' style={{background: '#BF9742', marginLeft: '2rem', width: '239px', height: '862px', marginTop: '1rem', borderRadius: '15px'}}>Google ADS</div>
            </div>
            <div className={styles.main}>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card" style={{boxShadow: 'rgba(12, 11, 11, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}>
                            <Image src={tablet} alt='' className="card-img-top p-4" width={200} height={160} name='' />
                            <div className={styles.heart}>
                                <p><BsHeartFill style={{fontSize: '20px'}} /></p>
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
                            <Image src={tvscreen} alt='' className="card-img-top p-4" width={200} height={160} name='' />
                            <div className={styles.heart}>
                                <p><BsHeartFill style={{fontSize: '20px'}} /></p>
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
                            <Image src={camera} alt='' className="card-img-top p-4" width={200} height={160} name='' />
                            <div className={styles.heart}>
                                <p><BsHeartFill style={{fontSize: '20px'}} /></p>
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
                            <Image src={headphone} alt='' className="card-img-top p-4" width={200} height={160} name='' />
                            <div className={styles.heart}>
                                <p><BsHeartFill style={{fontSize: '20px'}} /></p>
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
                            <Image src={tvscreen} alt='' className="card-img-top p-4" width={200} height={160} name='' />
                            <div className={styles.heart}>
                                <p><BsHeartFill style={{fontSize: '20px'}} /></p>
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
                            <Image src={camera} alt='' className="card-img-top p-4" width={200} height={160} name='' />
                            <div className={styles.heart}>
                                <p><BsHeartFill style={{fontSize: '20px'}} /></p>
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
                            <Image src={headphone} alt='' className="card-img-top p-4" width={200} height={160} name='' />
                            <div className={styles.heart}>
                                <p><BsHeartFill style={{fontSize: '20px'}} /></p>
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
                            <Image src={camera} alt='' className="card-img-top p-4" width={200} height={160} name='' />
                            <div className={styles.heart}>
                                <p><BsHeartFill style={{fontSize: '20px'}} /></p>
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
                            <Image src={headphone} alt='' className="card-img-top p-4" width={200} height={160} name='' />
                            <div className={styles.heart}>
                                <p><BsHeartFill style={{fontSize: '20px'}} /></p>
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
            </div>  
            <div className={styles.showMore} style={{fontWeight: 800, fontSize: '16px'}}><Link href=''>الــمــزيــد</Link><BsArrowClockwise style={{color: '#aa0e1c', fontSize: '20px', marginRight: '4px'}} /></div>
        </div>
    </div>
  )
}
