import type { AromaGroup } from "../data/aromas";

export default function AromaSection({
  title,
  groups,
  checked,
  toggle
}: {
  title: string;
  groups: AromaGroup[];
  checked: Record<string, boolean>;
  toggle: (id: string) => void;
}) {
  return (
    <div className="card bg-base-100 p-4 shadow">
      <h2 className="text-xl font-semibold capitalize">{title}</h2>
      {groups.map(({ subcategory, aromas }) => (
        <section key={subcategory.id} className="mt-4">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-base-content/70">
            {subcategory.name}
          </h3>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {aromas.map((aroma) => (
              <label key={aroma.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={!!checked[aroma.id]}
                  onChange={() => toggle(aroma.id)}
                />
                {aroma.name}
              </label>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
