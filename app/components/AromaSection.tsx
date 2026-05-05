import type { AromaNode } from "../data/aromas";

export default function AromaSection({
  title,
  aromas,
  checked,
  toggle
}: {
  title: string;
  aromas: AromaNode[];
  checked: Record<string, boolean>;
  toggle: (id: string) => void;
}) {
  return (
    <div className="card bg-base-100 p-4 shadow">
      <h2 className="font-semibold mb-2 capitalize">{title}</h2>
      {aromas.map((a) => (
        <label key={a.id} className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="checkbox"
            checked={!!checked[a.id]}
            onChange={() => toggle(a.id)}
          />
          {a.name}
        </label>
      ))}
    </div>
  );
}
