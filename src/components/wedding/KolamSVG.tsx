const KolamSVG = ({ className = "", size = 400, opacity = 0.08 }: { className?: string; size?: number; opacity?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 400 400"
    className={className}
    style={{ opacity }}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Kolam concentric diamond geometry */}
    <g stroke="hsl(42 55% 55%)" strokeWidth="1">
      <polygon points="200,40 360,200 200,360 40,200" />
      <polygon points="200,80 320,200 200,320 80,200" />
      <polygon points="200,120 280,200 200,280 120,200" />
      <polygon points="200,150 250,200 200,250 150,200" />
      {/* Cross lines */}
      <line x1="200" y1="40" x2="200" y2="360" />
      <line x1="40" y1="200" x2="360" y2="200" />
      {/* Diagonal connecting arcs */}
      <circle cx="200" cy="200" r="80" />
      <circle cx="200" cy="200" r="140" />
      {/* Corner dots */}
      {[
        [200, 40], [360, 200], [200, 360], [40, 200],
        [280, 120], [280, 280], [120, 280], [120, 120],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="hsl(42 55% 55%)" />
      ))}
      {/* Petal curves */}
      <path d="M200,120 Q240,160 200,200 Q160,160 200,120" />
      <path d="M280,200 Q240,240 200,200 Q240,160 280,200" />
      <path d="M200,280 Q160,240 200,200 Q240,240 200,280" />
      <path d="M120,200 Q160,160 200,200 Q160,240 120,200" />
    </g>
  </svg>
);

export default KolamSVG;
