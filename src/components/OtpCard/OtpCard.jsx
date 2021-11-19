import styles from '../LoginCard/LoginCard.module.css';
import loginimg from '../../assets/loginimg.jpg';

import OtpInput from 'react-otp-input';

function LoginCard() {
  return (
    <div className={styles.logincard}>
      <div className={styles.loginImgContainer}>
        <img src={loginimg} className={styles.loginImg} alt='' />
      </div>
      <div className={styles.logincardTitle}>
        <div className={styles.logincardItem}>Enter the OTP</div>
        <div className={styles.logincardItem}>sent to your number</div>
      </div>
      <div className={styles.logincardDesc}>
        <div className={styles.loginDescItem}>The otp has been sent to the</div>

        <div className={styles.loginDescItem}>following number +91</div>
      </div>

      <OtpInput
        containerStyle={{ height: '6vh' }}
        inputStyle={{ height: '100%', width: '70%', border: 'none', fontFamily: "Futura PT Bold", color: "black" }}
        shouldAutoFocus="true"
        numInputs={6}
      />

      <div className={styles.sendOTP}>verify OTP</div>

      <div className={styles.socialsLogin}>
        <div className={styles.googleLogin}>
          <div className={styles.editNo}>Edit Number</div>
        </div>
        <div className={styles.fbLogin}>
        <div className={styles.resend}>Resend (00:00)</div>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
