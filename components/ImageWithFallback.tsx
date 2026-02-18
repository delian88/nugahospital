
import React, { useState } from 'react';
import BrandIcon from './BrandIcon';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt, className }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`${className} bg-primary-light flex items-center justify-center p-8 transition-all overflow-hidden`}>
        <div className="text-center">
          <BrandIcon size={60} className="mx-auto opacity-30" />
          <p className="text-primary text-[10px] font-black mt-4 uppercase tracking-[0.2em] whitespace-nowrap">Visual Unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      onError={() => setError(true)} 
    />
  );
};

export default ImageWithFallback;
