import React, { useState } from 'react';
import styles from './Slider.module.css';
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 3) % images.length);

  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 3 + images.length) % images.length);
  };

  const getImagesToShow = () => {
    const index = currentIndex % images.length;
    return [
      images[index],
      images[(index + 1) % images.length],
      images[(index + 2) % images.length],
    ];
  };
  

  return (
    <div className={styles.carousel}>
      <button className={styles.carouselBtn1} onClick={prevImage}>
        &lt;
      </button>
      <div className={styles.slideContainer}>
        {getImagesToShow().map((image, index) => (
          <img
            key={index}
            className={styles.carouselImage}
            src={image}
            alt="Carousel Image"
          />
        ))}
      </div>
      <button className={styles.carouselBtn2} onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
