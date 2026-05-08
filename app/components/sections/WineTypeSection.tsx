import type { WineType } from "../../data/aromas";
import { wineTypeLabels, wineTypes } from "../../data/tasting";
import Card from "../Card";

interface WineTypeSectionProps {
  selectedWine: WineType | null;
  onSelect: (wineType: WineType) => void;
}

export default function WineTypeSection({
  selectedWine,
  onSelect,
}: WineTypeSectionProps) {
  return (
    <Card title="Wine Type">
      <fieldset className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <legend className="sr-only">Wine Type</legend>
        {wineTypes.map((wineType) => (
          <label
            key={wineType}
            className={`wine-type-radio-label flex min-h-12 cursor-pointer items-center gap-3 rounded-md border px-4 py-3 transition-colors hover:border-accent ${
              selectedWine === wineType
                ? "border-accent bg-accent/10"
                : "border-base-300 bg-base-100"
            }`}
          >
            <input
              type="radio"
              name="wine-type"
              className="radio radio-accent"
              checked={selectedWine === wineType}
              onChange={() => onSelect(wineType)}
            />
            <span className="label-text">{wineTypeLabels[wineType]}</span>
          </label>
        ))}
      </fieldset>
    </Card>
  );
}
