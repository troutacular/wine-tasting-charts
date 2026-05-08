import Card from "../Card";
import Slider from "../Slider";

const drinkabilityId = "Drinkability";

interface DrinkabilitySectionProps {
  values: Record<string, number>;
  onChange: (id: string, value: number) => void;
}

export default function DrinkabilitySection({
  values,
  onChange,
}: DrinkabilitySectionProps) {
  return (
    <Card title="Drinkability">
      <Slider
        label={drinkabilityId}
        min={0}
        max={3}
        value={values[drinkabilityId] || 0}
        labels={[
          "Too Young",
          "Drink now, don't age",
          "Drink now, can age",
          "Past it's prime",
        ]}
        onChange={(value) => onChange(drinkabilityId, value)}
      />
    </Card>
  );
}
