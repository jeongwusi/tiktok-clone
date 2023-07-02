import React, { useState } from 'react';
import styles from './App.module.css';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const images = [
    {
      id: 0,
      imageUrl: 'https://cdn.pixabay.com/photo/2023/06/18/18/05/rose-8072535_1280.jpg',
    },
    {
      id: 1,
      imageUrl: 'https://cdn.pixabay.com/photo/2023/06/27/16/30/flower-8092680_1280.jpg',
    },
    {
      id: 2,
      imageUrl: 'https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_1280.jpg',
    },
    {
      id: 3,
      imageUrl: 'https://cdn.pixabay.com/photo/2016/02/17/19/08/lotus-1205631_1280.jpg',
    },
    {
      id: 4,
      imageUrl: 'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_1280.jpg',
    },
  ];

  const handleNextButton = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const handlePreviousButton = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleTouchStart = event => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = event => {
    setEndX(event.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (startX - endX > 100) {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
      return;
    }
    if (endX - startX > 100) {
      setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }
  };

  return (
    <div className={styles.container} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <img className={styles.image} src={images[currentIndex].imageUrl} alt="이미지" />
      <div className={styles.button}>
        <button onClick={handlePreviousButton}>이전</button>
        <button onClick={handleNextButton}>다음</button>
      </div>
    </div>
  );
};

export default App;
