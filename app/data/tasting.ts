import type { AromaTier, WineType } from "./aromas";

export const STORAGE_KEY = "wine-app-state";

export interface TastingDetails {
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

export const createDefaultTastingDetails = (): TastingDetails => ({
  date: getToday(),
  wineName: "",
  country: "",
  region: "",
  price: "",
});

export const countryOptions = [
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

export const wineTypeLabels: Record<WineType, string> = {
  red: "Red",
  white: "White",
  sparkling: "Sparkling",
  rose: "Rosé",
};

export const wineTypes: WineType[] = ["red", "white", "rose", "sparkling"];

export const aromaTierSections: { id: AromaTier; title: string }[] = [
  { id: "primary", title: "Primary" },
  { id: "secondary", title: "Secondary" },
  { id: "tertiary", title: "Tertiary" },
];
