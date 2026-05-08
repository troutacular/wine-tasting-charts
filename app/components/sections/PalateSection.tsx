import Card from "../Card";
import Slider from "../Slider";

const palateFields = [
  {
    id: "Sweetness",
    min: 0,
    max: 3,
    labels: ["Dry", "Off-Dry", "Medium", "Sweet"],
  },
  {
    id: "Acid",
    min: 0,
    max: 4,
    labels: ["Low", "Medium (-)", "Medium", "Medium (+)", "High"],
  },
  {
    id: "Tannins",
    min: 0,
    max: 4,
    labels: ["Low", "Medium (-)", "Medium", "Medium (+)", "High"],
  },
  {
    id: "Alcohol",
    min: 0,
    max: 4,
    labels: ["Low", "Medium (-)", "Medium", "Medium (+)", "High"],
  },
  {
    id: "Body",
    min: 0,
    max: 2,
    labels: ["Light", "Medium", "Full"],
  },
  {
    id: "Length",
    min: 0,
    max: 2,
    labels: ["Short", "Medium", "Long"],
  },
];

interface PalateSectionProps {
  values: Record<string, number>;
  onChange: (id: string, value: number) => void;
}

export default function PalateSection({
  values,
  onChange,
}: PalateSectionProps) {
  return (
    <Card title="Palate">
      {palateFields.map((field) => (
        <Slider
          key={field.id}
          label={field.id}
          min={field.min}
          max={field.max}
          value={values[field.id] || 0}
          labels={field.labels}
          onChange={(value) => onChange(field.id, value)}
        />
      ))}
    </Card>
  );
}
