const CalligraphicStroke = ({ className = "", variant = 1 }: { className?: string; variant?: 1 | 2 | 3 }) => {
  const strokes: Record<number, string> = {
    1: "M10,80 Q30,20 60,50 T120,30 Q150,60 180,40 Q200,80 230,50",
    2: "M20,60 Q50,10 80,40 Q110,70 140,30 Q170,50 200,20 Q220,60 250,40",
    3: "M10,50 Q40,80 70,30 Q100,60 130,20 Q160,70 190,40 Q210,50 240,30",
  };

  return (
    <svg
      viewBox="0 0 250 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d={strokes[variant]}
        stroke="hsl(42 35% 68%)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.12"
      />
    </svg>
  );
};

export default CalligraphicStroke;
