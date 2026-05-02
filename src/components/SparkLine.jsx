export const SparkLine = ({ data, color = '#7dd3fc', height = 36, width = 120 }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const pts = data
    .map(
      (v, i) =>
        `${(i / (data.length - 1)) * width},${height - ((v - min) / (max - min || 1)) * (height - 4) - 2}`
    )
    .join(' ');
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};
