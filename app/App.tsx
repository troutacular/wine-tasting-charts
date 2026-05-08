import PrintWine from "./components/PrintWine";
import AppearanceSection from "./components/sections/AppearanceSection";
import AromaFlavorSection from "./components/sections/AromaFlavorSection";
import ConclusionSection from "./components/sections/ConclusionSection";
import DrinkabilitySection from "./components/sections/DrinkabilitySection";
import PalateSection from "./components/sections/PalateSection";
import WineDetailsSection from "./components/sections/WineDetailsSection";
import WineTypeSection from "./components/sections/WineTypeSection";
import { wineTypeLabels } from "./data/tasting";
import { useTastingForm } from "./hooks/useTastingForm";

export default function App() {
  const {
    selectedWine,
    setSelectedWine,
    tastingDetails,
    updateTastingDetails,
    checked,
    toggleAroma,
    appearance,
    updateAppearance,
    palate,
    updatePalate,
    conclusion,
    updateConclusion,
    wsetOnly,
    setWsetOnly,
    reset: resetTasting,
  } = useTastingForm();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const reset = () => {
    resetTasting();
    scrollToTop();
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

        <WineDetailsSection
          details={tastingDetails}
          onChange={updateTastingDetails}
        />
        <WineTypeSection
          selectedWine={selectedWine}
          onSelect={(wineType) => setSelectedWine(wineType)}
        />
        <AppearanceSection
          selectedWine={selectedWine}
          values={appearance}
          onChange={updateAppearance}
        />
        <AromaFlavorSection
          selectedWine={selectedWine}
          checked={checked}
          onToggle={toggleAroma}
          wsetOnly={wsetOnly}
          onWsetOnlyChange={setWsetOnly}
        />
        <PalateSection values={palate} onChange={updatePalate} />
        <ConclusionSection values={conclusion} onChange={updateConclusion} />
        <DrinkabilitySection values={conclusion} onChange={updateConclusion} />

        <PrintWine onPrint={printPDF} onReset={reset} />
      </div>
    </div>
  );
}
