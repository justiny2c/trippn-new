import React, { useState, useEffect } from 'react';
import Image1 from "../images/ethan-dow-xssEs_oCv-A-unsplash.jpg";
import Image2 from "../images/meritt-thomas-GktK3Jb9BRE-unsplash.jpg";
import Image3 from "../images/emily-karakis-h42lxMVrA08-unsplash.jpg";
import Image4 from "../images/drew-dau-VBRahreku1o-unsplash.jpg";
import "./LoadingScreen.css"

const LoadingScreen = () => {
    const [loadingComplete, setLoadingComplete] = useState(false);
  
    useEffect(() => {
      // Set timeouts to control the sequence of animations
      const timeouts = [
        setTimeout(() => {/* ... */}, 1000), // Trigger first image
        setTimeout(() => {/* ... */}, 2000), // Trigger second image
        // Add more as needed
      ];
  
      // After all animations, set loading to complete
      const loadingTimeout = setTimeout(() => {
        setLoadingComplete(true);
      }, /* Set this to the total animation time */);
  
      return () => {
        // Cleanup timeouts if the component unmounts
        timeouts.forEach(clearTimeout);
        clearTimeout(loadingTimeout);
      };
    }, []);
  
    return (
      <div className="loading-screen">
        <img className="image1" src={ Image1 } alt="Loading..." />
        <img className="image2" src={ Image2 } alt="Loading..." />
        <img className="image3" src={ Image3 } alt="Loading..." />
        <img className="image4" src={ Image4 } alt="Loading..." />
        {!loadingComplete && <div className="loading-text">LOADING</div>}
      </div>
    );
  };

  
  export default LoadingScreen
