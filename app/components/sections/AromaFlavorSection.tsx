import AromaSection from "../AromaSection";
import Card from "../Card";
import type { AromaGroup, WineType } from "../../data/aromas";
import { aromaCategories, getAromaGroupsByCategory } from "../../data/aromas";
import { aromaTierSections } from "../../data/tasting";

const filterAromaGroupsByWset = (
  groups: AromaGroup[],
  wsetOnly: boolean
): AromaGroup[] => {
  if (!wsetOnly) {
    return groups;
  }

  return groups
    .map((group) => ({
      ...group,
      aromas: group.aromas.filter((aroma) => aroma.wset === true),
    }))
    .filter((group) => group.aromas.length > 0);
};

interface AromaFlavorSectionProps {
  selectedWine: WineType | null;
  checked: Record<string, boolean>;
  onToggle: (id: string) => void;
  wsetOnly: boolean;
  onWsetOnlyChange: (checked: boolean) => void;
}

export default function AromaFlavorSection({
  selectedWine,
  checked,
  onToggle,
  wsetOnly,
  onWsetOnlyChange,
}: AromaFlavorSectionProps) {
  return (
    <Card title="Aroma / Flavor">
      <label className="mt-2 mb-10 flex items-center gap-2">
        <input
          type="checkbox"
          className="wset-checkbox checkbox"
          checked={wsetOnly}
          onChange={(event) => onWsetOnlyChange(event.target.checked)}
        />
        WSET L2 Options Only
      </label>
      <div className="space-y-6">
        {aromaTierSections.map((tier) => {
          const tierCategories = aromaCategories.filter(
            (category) => category.tier === tier.id
          );

          return (
            <section
              key={tier.id}
              className="aroma-tier space-y-4"
              data-aroma-tier={tier.title.toLowerCase()}
            >
              <h3 className="aroma-tier-header">{tier.title}</h3>
              {tierCategories.map((category) => {
                const groups = filterAromaGroupsByWset(
                  getAromaGroupsByCategory(
                    category.id,
                    selectedWine || undefined
                  ),
                  wsetOnly
                );

                if (groups.length === 0) {
                  return null;
                }

                return (
                  <AromaSection
                    key={category.id}
                    categoryId={category.id}
                    title={category.name}
                    groups={groups}
                    checked={checked}
                    toggle={onToggle}
                  />
                );
              })}
            </section>
          );
        })}
      </div>
    </Card>
  );
}
