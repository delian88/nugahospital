
import React from 'react';

interface BrandIconProps {
  className?: string;
  size?: number;
  white?: boolean;
}

const BrandIcon: React.FC<BrandIconProps> = ({ className = "", size = 40, white = false }) => {
  const primaryColor = "#b01c74";
  const circleColor = white ? "#ffffff" : primaryColor;
  const figureColor = white ? primaryColor : "#ffffff";

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Magenta Circle Background */}
      <circle cx="50" cy="50" r="48" fill={circleColor} />
      
      {/* Larger Human Figure (Left) */}
      <circle cx="34" cy="27" r="9" fill={figureColor} />
      <path 
        d="M22 88C22 62 38 38 72 26" 
        stroke={figureColor} 
        strokeWidth="11" 
        strokeLinecap="round" 
      />
      
      {/* Smaller Human Figure (Right) */}
      <circle cx="66" cy="34" r="7" fill={figureColor} />
      <path 
        d="M44 92C44 72 58 52 88 42" 
        stroke={figureColor} 
        strokeWidth="10" 
        strokeLinecap="round" 
      />
    </svg>
  );
};

export default BrandIcon;
