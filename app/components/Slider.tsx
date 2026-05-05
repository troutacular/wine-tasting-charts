export default function Slider({
  label,
  value,
  min,
  max,
  labels,
  onChange
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  labels: string[];
  onChange: (v: number) => void;
}) {
  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={1}
        className="range w-full"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div className="flex justify-between text-xs px-1">
        {labels.map((l, i) => (
          <span key={i}>{l}</span>
        ))}
      </div>
    </div>
  );
}