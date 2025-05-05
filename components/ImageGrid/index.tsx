import React from 'react'
import Image from 'next/image'
import styles from './ImageGrid.module.css'

const imageGridData = [
  '/images/company-1.png',
  '/images/company-2.png',
  '/images/company-3.png',
  '/images/company-4.png',
  '/images/company-5.png',
  '/images/company-6.png',
];

const ImageGrid = () => {
  return (
    <div className={styles.imageGridContainer}>
      {imageGridData.map((image, index) => (
        <div key={index} className={styles.imageItem}>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            layout="intrinsic"
            width={500}
            height={500}
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
