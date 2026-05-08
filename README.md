# Wine Tasting Charts

A React tasting worksheet for recording wine details, appearance, aroma/flavor notes, palate, conclusions, and drinkability. The app is designed for quick in-browser tasting notes with printable output.

## Usage

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The local URL is usually `http://localhost:5173/wine-tasting-charts/`. If that port is already busy, Vite will choose the next available port and print the URL in the terminal.

In the app:

- Fill in the wine details section.
- Choose a wine type to reveal matching appearance options and filter aroma suggestions.
- Toggle `WSET L2 Options Only` to narrow aroma/flavor choices to WSET-marked entries.
- Use sliders for appearance, palate, conclusions, and drinkability.
- Use `Print PDF` for a printable tasting sheet.
- Use `Reset` to clear the current tasting and return to the top of the page.

## State Storage

The tasting form stores its current state in browser `localStorage` under the key `wine-app-state`.

Persisted fields include:

- selected wine type
- wine details: date, wine name, country, region, price
- selected aroma/flavor checkboxes
- appearance slider values
- palate slider values
- conclusion and drinkability slider values
- `WSET L2 Options Only` toggle state

State is restored automatically when the app loads in the same browser. The default date is recalculated only when creating a new blank tasting or when missing from older saved data.

The `Reset` button removes `wine-app-state` from `localStorage` and clears the in-memory form state. Clearing browser site data will also remove saved tasting progress.

## Project Structure

- `app/App.tsx` composes the main worksheet sections.
- `app/hooks/useTastingForm.ts` owns form state, localStorage hydration, persistence, and reset behavior.
- `app/data/tasting.ts` contains shared tasting options, labels, defaults, and the storage key.
- `app/data/aromas.ts` contains aroma/flavor data and wine-type filtering metadata.
- `app/components/sections/` contains the card-level worksheet sections.
- `app/components/` contains shared UI pieces such as `Card`, `Slider`, `AromaSection`, and `PrintWine`.

## Build

Create a production build:

```bash
npm run build
```

Run TypeScript and React Router type generation:

```bash
npm run typecheck
```

Deploy to GitHub Pages:

```bash
npm run deploy
```
