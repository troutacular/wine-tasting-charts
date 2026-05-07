import type { CSSProperties } from "react";

export default function Slider({
  label,
  value,
  min,
  max,
  labels,
  colors,
  onChange
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  labels: string[];
  colors?: string[];
  onChange: (v: number) => void;
}) {
  const valueIndex = Math.min(Math.max(value - min, 0), labels.length - 1);
  const stepColors = labels.map((_, index) => colors?.[index]);
  const hasColors = stepColors.some(Boolean);
  const activeColor = stepColors[valueIndex];
  const sliderProgress =
    max === min
      ? 0
      : Math.min(Math.max(((value - min) / (max - min)) * 100, 0), 100);
  const sliderStyle = {
    "--slider-active-color": activeColor || "currentColor",
    "--slider-progress": `${sliderProgress}%`,
  } as CSSProperties;

  return (
    <div className="slider-field mb-4">
      <label className="block mb-1">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={1}
        className={`range w-full ${hasColors ? "slider-range-with-colors" : ""}`}
        value={value}
        style={hasColors ? sliderStyle : undefined}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div className="flex justify-between text-xs px-1">
        {labels.map((l, i) => (
          <span key={i} className="slider-step-label">
            {stepColors[i] && (
              <span
                className="slider-label-swatch"
                style={{ backgroundColor: stepColors[i] }}
              />
            )}
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}
