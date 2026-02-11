const FloralSVG = ({ className = "", variant = "jasmine" }: { className?: string; variant?: "jasmine" | "mughal" }) => {
  if (variant === "jasmine") {
    return (
      <svg width="180" height="220" viewBox="0 0 180 220" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.15">
          {/* Jasmine-inspired petals */}
          <ellipse cx="90" cy="60" rx="18" ry="30" fill="hsl(39 40% 96%)" stroke="hsl(140 15% 60%)" strokeWidth="0.8" transform="rotate(0 90 60)" />
          <ellipse cx="90" cy="60" rx="18" ry="30" fill="hsl(39 40% 96%)" stroke="hsl(140 15% 60%)" strokeWidth="0.8" transform="rotate(72 90 60)" />
          <ellipse cx="90" cy="60" rx="18" ry="30" fill="hsl(39 40% 96%)" stroke="hsl(140 15% 60%)" strokeWidth="0.8" transform="rotate(144 90 60)" />
          <ellipse cx="90" cy="60" rx="18" ry="30" fill="hsl(39 40% 96%)" stroke="hsl(140 15% 60%)" strokeWidth="0.8" transform="rotate(216 90 60)" />
          <ellipse cx="90" cy="60" rx="18" ry="30" fill="hsl(39 40% 96%)" stroke="hsl(140 15% 60%)" strokeWidth="0.8" transform="rotate(288 90 60)" />
          <circle cx="90" cy="60" r="8" fill="hsl(42 55% 55%)" opacity="0.4" />
          {/* Stem */}
          <path d="M90,90 Q85,140 90,190" stroke="hsl(140 15% 60%)" strokeWidth="1.2" />
          <path d="M90,120 Q70,110 60,95" stroke="hsl(140 15% 60%)" strokeWidth="0.8" fill="none" />
          <ellipse cx="55" cy="92" rx="12" ry="6" fill="hsl(140 15% 60%)" opacity="0.2" transform="rotate(-30 55 92)" />
          <path d="M90,150 Q110,140 120,125" stroke="hsl(140 15% 60%)" strokeWidth="0.8" fill="none" />
          <ellipse cx="125" cy="122" rx="12" ry="6" fill="hsl(140 15% 60%)" opacity="0.2" transform="rotate(30 125 122)" />
        </g>
      </svg>
    );
  }

  return (
    <svg width="180" height="220" viewBox="0 0 180 220" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.15">
        {/* Mughal-style layered flower */}
        <path d="M90,30 Q110,60 90,90 Q70,60 90,30Z" fill="hsl(350 20% 75%)" stroke="hsl(42 55% 55%)" strokeWidth="0.6" />
        <path d="M60,55 Q90,75 120,55 Q90,95 60,55Z" fill="hsl(350 20% 75%)" stroke="hsl(42 55% 55%)" strokeWidth="0.6" />
        <path d="M55,80 Q90,60 125,80 Q90,100 55,80Z" fill="hsl(350 20% 75%)" stroke="hsl(42 55% 55%)" strokeWidth="0.6" />
        <circle cx="90" cy="65" r="10" fill="hsl(42 55% 55%)" opacity="0.3" />
        {/* Decorative arch */}
        <path d="M50,100 Q90,70 130,100" stroke="hsl(42 55% 55%)" strokeWidth="0.8" fill="none" />
        <path d="M55,105 Q90,78 125,105" stroke="hsl(42 55% 55%)" strokeWidth="0.5" fill="none" />
        {/* Stem with leaves */}
        <path d="M90,100 Q88,150 90,200" stroke="hsl(140 15% 60%)" strokeWidth="1" />
        <path d="M90,130 Q65,120 55,108" stroke="hsl(140 15% 60%)" strokeWidth="0.7" fill="none" />
        <path d="M90,160 Q115,150 125,138" stroke="hsl(140 15% 60%)" strokeWidth="0.7" fill="none" />
      </g>
    </svg>
  );
};

export default FloralSVG;
