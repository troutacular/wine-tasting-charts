import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import AromaSection from "./components/AromaSection";
import Card from "./components/Card";
import Slider from "./components/Slider";
import { aromaCategories, getAromaGroupsByCategory } from "./data/aromas";
import type { WineType } from "./data/aromas";

const STORAGE_KEY = "wine-app-state";

interface TastingDetails {
  date: string;
  wineName: string;
  country: string;
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
  price: "",
});

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedWine, setSelectedWine] = useState<WineType | null>(null);
  const [tastingDetails, setTastingDetails] = useState<TastingDetails>(
    createDefaultTastingDetails
  );
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [palate, setPalate] = useState<Record<string, number>>({});
  const [conclusion, setConclusion] = useState<Record<string, number>>({});

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setSelectedWine(parsed.selectedWine);
      setTastingDetails({
        ...createDefaultTastingDetails(),
        ...(parsed.tastingDetails || {}),
      });
      setChecked(parsed.checked || {});
      setPalate(parsed.palate || {});
      setConclusion(parsed.conclusion || {});
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        selectedWine,
        tastingDetails,
        checked,
        palate,
        conclusion,
      })
    );
  }, [selectedWine, tastingDetails, checked, palate, conclusion]);

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
    setPalate({});
    setConclusion({});
  };

  const printPDF = () => window.print();

  return (
    <div className="flex min-h-screen bg-base-200">
      <Sidebar
        selectedWine={selectedWine}
        setSelectedWine={setSelectedWine}
        open={sidebarOpen}
        toggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <div className="flex-1 p-6 space-y-6">
        <h1 className="text-2xl font-bold capitalize">
          {selectedWine || "Wine Aromas"}
        </h1>

        <Card title="Wine Details">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
              <input
                type="text"
                className="input input-bordered w-full"
                value={tastingDetails.country}
                onChange={(event) =>
                  updateTastingDetails("country", event.target.value)
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

        <Card title="Nose">
          {aromaCategories.map((category) => (
            <AromaSection
              key={category.id}
              title={category.name}
              groups={getAromaGroupsByCategory(
                category.id,
                selectedWine || undefined
              )}
              checked={checked}
              toggle={toggle}
            />
          ))}
        </Card>

        <Card title="Palate">
          {["Acid", "Sweetness", "Tannins", "Body", "Alcohol", "Length"].map(
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

        <div className="flex gap-4">
          <button className="btn btn-primary" onClick={printPDF}>
            Print PDF
          </button>
          <button className="btn btn-error" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
