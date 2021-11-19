// import walleticon from '../../assets/walleticon.svg';
// import homeicon from '../../assets/homeicon.svg';
// import profileicon from '../../assets/profileicon.svg';

import { useState } from 'react';

import styles from './Navbar.module.css';
import HomeIcon from '../Icons/HomeIcon/HomeIcon';
import ProfileIcon from '../Icons/ProfileIcon/ProfileIcon';
import WalletIcon from '../Icons/WalletIcon/WalletIcon';

function Navbar() {
  const [current, setCurrent] = useState('home');
  return (
    <div className={styles.navbarContainer}>
      <WalletIcon current={current} onClick={() => setCurrent('wallet')} />
      <HomeIcon current={current} onClick={() => setCurrent('home')} />
      <ProfileIcon current={current} onClick={() => setCurrent('profile')} />
    </div>
  );
}

export default Navbar;
