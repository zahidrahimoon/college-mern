// src/hooks/useCountUp.js

import { useState, useEffect } from 'react';

const useCountUp = (end, duration) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // Assuming 60 frames per second
    const step = () => {
      start += increment;
      if (start >= end) {
        setCount(end);
      } else {
        setCount(Math.ceil(start));
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration]);

  return count;
};

export default useCountUp;
