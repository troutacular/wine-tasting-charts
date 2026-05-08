import Card from "../Card";
import Slider from "../Slider";

const conclusionFields = [
  "Balance",
  "Length",
  "Complexity",
  "Intensity",
  "Overall Quality",
];

interface ConclusionSectionProps {
  values: Record<string, number>;
  onChange: (id: string, value: number) => void;
}

export default function ConclusionSection({
  values,
  onChange,
}: ConclusionSectionProps) {
  return (
    <Card title="Conclusions">
      {conclusionFields.map((field) => (
        <Slider
          key={field}
          label={field}
          min={0}
          max={3}
          value={values[field] || 0}
          labels={["Acceptable", "Good", "Very Good", "Great"]}
          onChange={(value) => onChange(field, value)}
        />
      ))}
    </Card>
  );
}
