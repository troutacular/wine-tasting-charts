import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import AromaSection from "./components/AromaSection";
import Card from "./components/Card";
import Slider from "./components/Slider";
import { aromaCategories, getAromaGroupsByCategory } from "./data/aromas";
import type { WineType } from "./data/aromas";

const STORAGE_KEY = "wine-app-state";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedWine, setSelectedWine] = useState<WineType | null>(null);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [palate, setPalate] = useState<Record<string, number>>({});
  const [conclusion, setConclusion] = useState<Record<string, number>>({});

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setSelectedWine(parsed.selectedWine);
      setChecked(parsed.checked || {});
      setPalate(parsed.palate || {});
      setConclusion(parsed.conclusion || {});
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ selectedWine, checked, palate, conclusion })
    );
  }, [selectedWine, checked, palate, conclusion]);

  const toggle = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setSelectedWine(null);
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
