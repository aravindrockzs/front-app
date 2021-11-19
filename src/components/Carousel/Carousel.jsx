import styles from './Carousel.module.css';

import car2 from '../../assets/car2.jpg';
import car3 from '../../assets/car3.jpg';
import car4 from '../../assets/car4.jpg';
import car5 from '../../assets/car3.jpg';

import './Carousel.min.css';

import { Carousel as CarouselAnimate } from 'react-responsive-carousel';

const imgArray = [car2];

function Carousel() {
  return (
    <div className={styles.caroContainer}>
      <CarouselAnimate
        interval={1500}
        showArrows={false}
        showStatus={false}
        animationHandler='fade'
        swipeable={false}
        showThumbs={false}
        infiniteLoop={true}
        dynamicHeight={false}
        autoPlay
      >
        {imgArray.map((curr) => {
          return (
            <img
              className={styles.caroImg}
              style={{ height: '150px' }}
              src={curr}
              alt='images for slider'
            />
          );
        })}
      </CarouselAnimate>
    </div>
  );
}

export default Carousel;
