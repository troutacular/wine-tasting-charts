import type { WineType } from "../../data/aromas";
import { wineTypeLabels } from "../../data/tasting";
import Card from "../Card";
import Slider from "../Slider";

interface AppearanceField {
  id: string;
  label: string;
  labels: string[];
  colors: string[];
}

const appearanceFieldsByWine: Record<WineType, AppearanceField[]> = {
  red: [
    {
      id: "red-color",
      label: "Color",
      labels: ["Purple", "Ruby", "Garnet", "Tawny"],
      colors: ["#941b41", "#601f2d", "#441719", "#621e13"],
    },
  ],
  white: [
    {
      id: "white-color",
      label: "Color",
      labels: ["Lemon-green", "Lemon", "Gold", "Amber", "Brown"],
      colors: ["#DAF278", "#f5ee7e", "#f2df78", "#fcb43e", "#c5812c"],
    },
  ],
  sparkling: [
    {
      id: "sparkling-color",
      label: "Color",
      labels: ["Lemon", "Gold", "Amber", "Rosé"],
      colors: ["#f5ee7e", "#f2df78", "#fcb43e", "#ef868b"],
    },
  ],
  rose: [
    {
      id: "rose-color",
      label: "Color",
      labels: ["Pink", "Salmon", "Orange", "Copper"],
      colors: ["#f4c4c4", "#f38a75", "#ee8339", "#da5028"],
    },
  ],
};

interface AppearanceSectionProps {
  selectedWine: WineType | null;
  values: Record<string, number>;
  onChange: (id: string, value: number) => void;
}

export default function AppearanceSection({
  selectedWine,
  values,
  onChange,
}: AppearanceSectionProps) {
  return (
    <Card
      title={
        selectedWine
          ? `Appearance - ${wineTypeLabels[selectedWine]}`
          : "Appearance"
      }
    >
      {selectedWine ? (
        appearanceFieldsByWine[selectedWine].map((field) => (
          <Slider
            key={field.id}
            label={field.label}
            min={0}
            max={field.labels.length - 1}
            value={values[field.id] || 0}
            labels={field.labels}
            colors={field.colors}
            onChange={(value) => onChange(field.id, value)}
          />
        ))
      ) : (
        <p className="text-sm text-base-content/70">
          Select a wine type to show appearance options.
        </p>
      )}
    </Card>
  );
}
