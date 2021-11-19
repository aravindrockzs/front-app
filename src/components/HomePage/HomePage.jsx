import styles from './HomePage.module.css';
function HomePage(props) {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeBg}>{props.children}</div>
    </div>
  );
}

export default HomePage;
