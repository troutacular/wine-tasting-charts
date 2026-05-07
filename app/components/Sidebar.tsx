const wineTypes = ["red", "white", "rose", "sparkling"] as const;

export default function Sidebar({
  selectedWine,
  setSelectedWine,
  open,
  toggle
}: {
  selectedWine: string | null;
  setSelectedWine: (w: any) => void;
  open: boolean;
  toggle: () => void;
}) {
  return (
    <div
      className={`app-sidebar bg-base-100 shadow-lg transition-all ${
        open ? "w-64" : "w-16"
      }`}
    >
      <button className="btn btn-sm m-2" onClick={toggle}>
        ☰
      </button>

      {open && (
        <div className="p-4">
          <h2 className="mb-4 sidebar-title">Wine Types</h2>
          {wineTypes.map((w) => (
            <button
              key={w}
              className={`btn btn-ghost w-full mb-2 ${
                selectedWine === w ? "btn-active" : ""
              }`}
              onClick={() => setSelectedWine(w)}
            >
              {w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
