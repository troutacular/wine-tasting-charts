import { useEffect, useState } from "react";
import type { WineType } from "../data/aromas";
import {
  createDefaultTastingDetails,
  STORAGE_KEY,
  type TastingDetails,
} from "../data/tasting";

type BooleanMap = Record<string, boolean>;
type NumberMap = Record<string, number>;

export function useTastingForm() {
  const [selectedWine, setSelectedWine] = useState<WineType | null>(null);
  const [tastingDetails, setTastingDetails] = useState<TastingDetails>(
    createDefaultTastingDetails
  );
  const [checked, setChecked] = useState<BooleanMap>({});
  const [appearance, setAppearance] = useState<NumberMap>({});
  const [palate, setPalate] = useState<NumberMap>({});
  const [conclusion, setConclusion] = useState<NumberMap>({});
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

  const toggleAroma = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const updateAppearance = (id: string, value: number) => {
    setAppearance((prev) => ({ ...prev, [id]: value }));
  };

  const updatePalate = (id: string, value: number) => {
    setPalate((prev) => ({ ...prev, [id]: value }));
  };

  const updateConclusion = (id: string, value: number) => {
    setConclusion((prev) => ({ ...prev, [id]: value }));
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
  };

  return {
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
    reset,
  };
}
