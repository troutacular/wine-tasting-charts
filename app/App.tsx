import { useEffect, useState } from "react";
import AromaSection from "./components/AromaSection";
import Card from "./components/Card";
import PrintWine from "./components/PrintWine";
import Slider from "./components/Slider";
import { aromaCategories, getAromaGroupsByCategory } from "./data/aromas";
import type { AromaGroup, AromaTier, WineType } from "./data/aromas";

const STORAGE_KEY = "wine-app-state";

interface TastingDetails {
  date: string;
  wineName: string;
  country: string;
  region: string;
  price: string;
}

const getToday = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const createDefaultTastingDetails = (): TastingDetails => ({
  date: getToday(),
  wineName: "",
  country: "",
  region: "",
  price: "",
});

const countryOptions = [
  "Argentina",
  "Australia",
  "Chile",
  "France",
  "Italy",
  "New Zealand",
  "South Africa",
  "Spain",
  "US",
];

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
      colors: ["#f8f6df", "#f4ed83", "#f3e07a", "#fcb43e", "#c5812c"],
    },
  ],
  sparkling: [
    {
      id: "sparkling-color",
      label: "Color",
      labels: ["Lemon", "Gold", "Amber", "Rosé"],
      colors: ["#f4ed83", "#f3e07a", "#fcb43e", "#ef868b"],
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

const wineTypeLabels: Record<WineType, string> = {
  red: "Red",
  white: "White",
  sparkling: "Sparkling",
  rose: "Rosé",
};

const wineTypes: WineType[] = ["red", "white", "rose", "sparkling"];

const aromaTierSections: { id: AromaTier; title: string }[] = [
  { id: "primary", title: "Primary" },
  { id: "secondary", title: "Secondary" },
  { id: "tertiary", title: "Tertiary" },
];

const filterAromaGroupsByWset = (
  groups: AromaGroup[],
  wsetOnly: boolean
): AromaGroup[] => {
  if (!wsetOnly) {
    return groups;
  }

  return groups
    .map((group) => ({
      ...group,
      aromas: group.aromas.filter((aroma) => aroma.wset === true),
    }))
    .filter((group) => group.aromas.length > 0);
};

export default function App() {
  const [selectedWine, setSelectedWine] = useState<WineType | null>(null);
  const [tastingDetails, setTastingDetails] = useState<TastingDetails>(
    createDefaultTastingDetails
  );
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [appearance, setAppearance] = useState<Record<string, number>>({});
  const [palate, setPalate] = useState<Record<string, number>>({});
  const [conclusion, setConclusion] = useState<Record<string, number>>({});
  const [wsetOnly, setWsetOnly] = useState(false);
  const [stateLoaded, setStateLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setSelectedWine(parsed.selectedWine);
        setTastingDetails({
          ...createDefaultTastingDetails(),
          ...(parsed.tastingDetails || {}),
        });
        setChecked(parsed.checked || {});
        setAppearance(parsed.appearance || {});
        setPalate(parsed.palate || {});
        setConclusion(parsed.conclusion || {});
        setWsetOnly(parsed.wsetOnly || false);
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setStateLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!stateLoaded) {
      return;
    }

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        selectedWine,
        tastingDetails,
        checked,
        appearance,
        palate,
        conclusion,
        wsetOnly,
      })
    );
  }, [
    selectedWine,
    tastingDetails,
    checked,
    appearance,
    palate,
    conclusion,
    wsetOnly,
    stateLoaded,
  ]);

  const updateTastingDetails = <Key extends keyof TastingDetails>(
    key: Key,
    value: TastingDetails[Key]
  ) => {
    setTastingDetails((prev) => ({ ...prev, [key]: value }));
  };

  const toggle = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setSelectedWine(null);
    setTastingDetails(createDefaultTastingDetails());
    setChecked({});
    setAppearance({});
    setPalate({});
    setConclusion({});
    setWsetOnly(false);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const printPDF = () => window.print();

  return (
    <div
      className="min-h-screen bg-base-200 wine-type"
      data-wine-type={selectedWine}
    >
      <div className="p-6 space-y-6">
        <h1 className="app-title">
          {selectedWine ? wineTypeLabels[selectedWine] : "Wine Tasting Notes"}
        </h1>

        <Card title="Wine Details">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5 wine-details">
            <label className="form-control">
              <span className="label-text mb-1">Date</span>
              <input
                type="date"
                className="input input-bordered w-full"
                value={tastingDetails.date}
                onChange={(event) =>
                  updateTastingDetails("date", event.target.value)
                }
              />
            </label>
            <label className="form-control">
              <span className="label-text mb-1">Wine Name</span>
              <input
                type="text"
                className="input input-bordered w-full"
                value={tastingDetails.wineName}
                onChange={(event) =>
                  updateTastingDetails("wineName", event.target.value)
                }
              />
            </label>
            <label className="form-control">
              <span className="label-text mb-1">Country</span>
              <select
                className="select select-bordered w-full"
                value={tastingDetails.country}
                onChange={(event) =>
                  updateTastingDetails("country", event.target.value)
                }
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
                value={tastingDetails.region}
                onChange={(event) =>
                  updateTastingDetails("region", event.target.value)
                }
              />
            </label>
            <label className="form-control">
              <span className="label-text mb-1">Price</span>
              <input
                type="text"
                className="input input-bordered w-full"
                value={tastingDetails.price}
                onChange={(event) =>
                  updateTastingDetails("price", event.target.value)
                }
              />
            </label>
          </div>
        </Card>

        <Card title="Wine Type">
          <fieldset className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <legend className="sr-only">Wine Type</legend>
            {wineTypes.map((wineType) => (
              <label
                key={wineType}
                className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-md border px-4 py-3 transition-colors hover:border-accent ${
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
                  onChange={() => setSelectedWine(wineType)}
                />
                <span className="label-text">{wineTypeLabels[wineType]}</span>
              </label>
            ))}
          </fieldset>
        </Card>

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
                value={appearance[field.id] || 0}
                labels={field.labels}
                colors={field.colors}
                onChange={(v) =>
                  setAppearance({ ...appearance, [field.id]: v })
                }
              />
            ))
          ) : (
            <p className="text-sm text-base-content/70">
              Select a wine type to show appearance options.
            </p>
          )}
        </Card>

        <Card title="Aroma / Flavor">
          <label key={"wset-only"} className="mt-2 mb-10 flex items-center gap-2">
            <input
              type="checkbox"
              className="wset-checkbox checkbox"
              checked={wsetOnly}
              onChange={(event) => setWsetOnly(event.target.checked)}
            />
            {"WSET L2 Options Only"}
          </label>
          <div className="space-y-6">
            {aromaTierSections.map((tier) => {
              const tierCategories = aromaCategories.filter(
                (category) => category.tier === tier.id
              );

              return (
                <section key={tier.id} className="aroma-tier space-y-4" data-aroma-tier={tier.title.toLowerCase()}>
                  <h3 className="aroma-tier-header">{tier.title}</h3>
                  {tierCategories.map((category) => {
                    const groups = filterAromaGroupsByWset(
                      getAromaGroupsByCategory(
                        category.id,
                        selectedWine || undefined
                      ),
                      wsetOnly
                    );

                    if (groups.length === 0) {
                      return null;
                    }

                    return (
                      <AromaSection
                        key={category.id}
                        categoryId={category.id}
                        title={category.name}
                        groups={groups}
                        checked={checked}
                        toggle={toggle}
                      />
                    );
                  })}
                </section>
              );
            })}
          </div>
        </Card>

        <Card title="Palate">
          <Slider
            key={"Sweetness"}
            label={"Sweetness"}
            min={0}
            max={3}
            value={palate["Sweetness"] || 0}
            labels={["Dry", "Off-Dry", "Medium", "Sweet"]}
            onChange={(v) => setPalate({ ...palate, ["Sweetness"]: v })}
          />
          {["Acid", "Tannins", "Alcohol"].map(
            (m) => (
              <Slider
                key={m}
                label={m}
                min={0}
                max={4}
                value={palate[m] || 0}
                labels={["Low", "Medium (-)", "Medium", "Medium (+)", "High"]}
                onChange={(v) => setPalate({ ...palate, [m]: v })}
              />
            )
          )}
          <Slider
            key={"Body"}
            label={"Body"}
            min={0}
            max={2}
            value={palate["Body"] || 0}
            labels={["Light", "Medium", "Full"]}
            onChange={(v) => setPalate({ ...palate, ["Body"]: v })}
          />
          <Slider
            key={"Length"}
            label={"Length"}
            min={0}
            max={2}
            value={palate["Length"] || 0}
            labels={["Short", "Medium", "Long"]}
            onChange={(v) => setPalate({ ...palate, ["Length"]: v })}
          />
        </Card>

        <Card title="Conclusions">
          {["Balance", "Length", "Complexity", "Intensity", "Overall Quality"].map(
            (m) => (
              <Slider
                key={m}
                label={m}
                min={0}
                max={3}
                value={conclusion[m] || 0}
                labels={["Acceptable", "Good", "Very Good", "Great"]}
                onChange={(v) => setConclusion({ ...conclusion, [m]: v })}
              />
            )
          )}
        </Card>

         <Card title="Drinkability">
          {["Drinkability"].map(
            (m) => (
              <Slider
                key={m}
                label={m}
                min={0}
                max={3}
                value={conclusion[m] || 0}
                labels={["Too Young", "Drink now, don't age", "Drink now, can age", "Past it's prime"]}
                onChange={(v) => setConclusion({ ...conclusion, [m]: v })}
              />
            )
          )}
        </Card>

        <PrintWine onPrint={printPDF} onReset={reset} />
      </div>
    </div>
  );
}
