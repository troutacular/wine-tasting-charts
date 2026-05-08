import Card from "../Card";
import { countryOptions, type TastingDetails } from "../../data/tasting";

interface WineDetailsSectionProps {
  details: TastingDetails;
  onChange: <Key extends keyof TastingDetails>(
    key: Key,
    value: TastingDetails[Key]
  ) => void;
}

export default function WineDetailsSection({
  details,
  onChange,
}: WineDetailsSectionProps) {
  return (
    <Card title="Wine Details" classes="wine-details">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5 wine-details">
        <label className="form-control">
          <span className="label-text mb-1">Date</span>
          <input
            type="date"
            className="input input-bordered w-full"
            value={details.date}
            onChange={(event) => onChange("date", event.target.value)}
          />
        </label>
        <label className="form-control">
          <span className="label-text mb-1">Wine Name</span>
          <input
            type="text"
            className="input input-bordered w-full"
            value={details.wineName}
            onChange={(event) => onChange("wineName", event.target.value)}
          />
        </label>
        <label className="form-control">
          <span className="label-text mb-1">Country</span>
          <select
            className="select select-bordered w-full"
            value={details.country}
            onChange={(event) => onChange("country", event.target.value)}
          >
            <option value="">Select a country</option>
            {countryOptions.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>
        <label className="form-control">
          <span className="label-text mb-1">Region</span>
          <input
            type="text"
            className="input input-bordered w-full"
            value={details.region}
            onChange={(event) => onChange("region", event.target.value)}
          />
        </label>
        <label className="form-control">
          <span className="label-text mb-1">Price</span>
          <input
            type="text"
            className="input input-bordered w-full"
            value={details.price}
            onChange={(event) => onChange("price", event.target.value)}
          />
        </label>
      </div>
    </Card>
  );
}
