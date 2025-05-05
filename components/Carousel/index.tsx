import Slider from 'react-slick';
import Image from 'next/image';
import { useRef } from 'react';
import styles from './Carousel.module.css';
import { SAMPLE_TEXT } from '../../constants/strings';

const Carousel = () => {
  const sliderRef = useRef(null);

  const carouselData = [
    {
      image: '/images/carousel-img-1.avif',
      text: 'Content 1',
      description: SAMPLE_TEXT.default
    },
    {
      image: '/images/carousel-img-2.avif',
      text: 'Content 2',
      description: SAMPLE_TEXT.default
    },
    {
      image: '/images/carousel-img-3.avif',
      text: 'Content 3',
      description: SAMPLE_TEXT.default
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider ref={sliderRef} {...settings}>
        {carouselData.map((item, index) => (
          <div key={index}>
            <div className={styles.carouselItem}>
              <div className={styles.carouselImage}>
                <Image
                  src={item.image}
                  alt={`Slide ${index + 1}`}
                  width={800}
                  height={400}
                  className={styles.carouselImg}
                />
              </div>
              <div className={styles.carouselText}>
                <h1>{item.text}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
