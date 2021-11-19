import starwide from '../../assets/starwide.svg';
import starthin from '../../assets/starthin.svg';
// import spring from '../../assets/spring.svg';
import starcombo from '../../assets/starcombo.svg';

import styles from './LoginBackground.module.css';

const LoginBackground = (props) => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBg}>
        <img src={starwide} className={styles.starWide} alt='' />
        <img src={starthin} className={styles.starThin} alt='' />
        {/* <img src={spring} className={styles.spring} alt='' /> */}

        <img src={starcombo} className={styles.starCombo} alt='' />
        {props.children}
      </div>
    </div>
  );
};

export default LoginBackground;
