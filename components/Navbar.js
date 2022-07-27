import styles from './../styles/Navbar.module.css';

import { BsSearch } from 'react-icons/bs';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export default function Navbar() {
  return (
    <div className={styles.container} style={{borderBottom: '2px solid #42D2CF'}}>
        <div className={styles.navbar}>
            <div style={{height: '40px',color: '#aa0e1c'}}>
                <h2 style={{fontStyle: 'italic', fontWeight: '500'}}>جــفــره</h2>
            </div>
            <div className="" >
                <input type="text" className="" placeholder="الـمـوقـع" style={{border: '1px solid #aa0e1c', color: 'CDD9ED', height: '40px', borderRadius: '0 8px 8px 0'}} />
                <input type="text" className="" placeholder="ابـحث فـى الاعـلانـات" style={{border: '1px solid #aa0e1c', color: 'CDD9ED', height: '40px'}} />
                <button className="px-4" style={{background: '#42D2CF', color: '#aa0e1c', height: '40px', display: 'inline-block', border: '0', borderRadius: '8px 0 0 8px'}} ><BsSearch style={{color: '#aa0e1c'}} /></button>
            </div>
            <div className={styles.post} style={{height: '40px'}}>
                <button className="px-5">نــشر إعــلان <AiOutlinePlusCircle style={{color: '#ffffff', fontSize: '20px', marginRight: '8px'}} /></button>
            </div>
        </div>
    </div>
  )
}
