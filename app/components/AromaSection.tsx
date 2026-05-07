import type { AromaGroup } from "../data/aromas";

export default function AromaSection({
  categoryId,
  title,
  groups,
  checked,
  toggle
}: {
  categoryId: string;
  title: string;
  groups: AromaGroup[];
  checked: Record<string, boolean>;
  toggle: (id: string) => void;
}) {
  return (
    <div
      className="aroma-section card bg-base-100 p-4 shadow"
      data-aroma-category={categoryId}
    >
      <h4 className="aroma-category-title">
        {title}
      </h4>
      <div className="aroma-groups grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {groups.map(({ subcategory, aromas }) => (
        <section
          key={subcategory.id}
          className="aroma-subcategory mt-4"
          data-aroma-subcategory={subcategory.id}
        >
          <h5 className="aroma-subcategory-title">
            {subcategory.name}
          </h5>
          <div className="">
            {aromas.map((aroma) => (
              <label key={aroma.id} className="aroma-option flex items-center gap-2 pb-3">
                <input
                  type="checkbox"
                  className="aroma-checkbox checkbox"
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
    </div>
  );
}
