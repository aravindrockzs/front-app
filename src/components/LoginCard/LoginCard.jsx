import PhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/style.css';
import styles from './LoginCard.module.css';

import fbicon from '../../assets/fbicon.svg';
import googleicon from '../../assets/googleicon.svg';

import loginimg from '../../assets/loginimg.jpg';
function LoginCard() {
  const inputStyle = { height: '100%', fontFamily: 'DM Sans', border: 'none' };

  return (
    <div className={styles.logincard}>
      <div className={styles.loginImgContainer}>
        <img src={loginimg} alt='' className={styles.loginImg} />
      </div>
      <div className={styles.logincardTitle}>
        <div className={styles.logincardItem}>Hey there,</div>
        <div className={styles.logincardItem}>Login to get started</div>
      </div>
      <div className={styles.logincardDesc}>
        <div className={styles.loginDescItem}>
          A world of exciting experiences and incredible
        </div>

        <div className={styles.loginDescItem}>
          {' '}
          rewards with Rippl Inc. awaits you
        </div>
      </div>
      <PhoneInput
        containerStyle={{ height: '12vh', borderRadius: '' }}
        inputStyle={inputStyle}
        inputClass={styles.phoneInput}
        country={'in'}
        inputProps={{
          name: 'phone',
          required: true,
          autoFocus: false,
        }}
      />

      <div className={styles.sendOTP}>Send OTP</div>

      <div className={styles.socialsLogin}>
        <div className={styles.googleLogin}>
          <img className={styles.googleIcon} src={googleicon} alt='' />
        </div>
        <div className={styles.fbLogin}>
          <img className={styles.fbIcon} src={fbicon} alt='' />
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
