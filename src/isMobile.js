// useMobileDetect.js
import { useState, useEffect } from 'react';

const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1588);
    };

    // Call the handleResize function once to set the initial value
    handleResize();

    // Add event listener to update isMobile on window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

export default useMobileDetect;
