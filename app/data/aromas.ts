export type WineType = "red" | "white" | "rose" | "sparkling";

export type NodeType = "root" | "category" | "subcategory" | "aroma";

export interface AromaNode {
  id: string;
  name: string;
  type: NodeType;
  parent?: string;
  wines?: WineType[];
}

export const aromaNodes: AromaNode[] = [
  { id: "root", name: "Aroma", type: "root" },

  { id: "fruity", name: "Fruity", type: "category", parent: "root" },
  { id: "floral", name: "Floral", type: "category", parent: "root" },
  { id: "herbaceous", name: "Herbaceous", type: "category", parent: "root" },
  { id: "earthy", name: "Earthy", type: "category", parent: "root" },
  { id: "spice", name: "Spice", type: "category", parent: "root" },
  { id: "oak", name: "Oak", type: "category", parent: "root" },
  { id: "other", name: "Other", type: "category", parent: "root" },

  { id: "citrus", name: "Citrus", type: "subcategory", parent: "fruity" },
  { id: "tree-fruit", name: "Tree Fruit", type: "subcategory", parent: "fruity" },
  { id: "tropical-fruit", name: "Tropical Fruit", type: "subcategory", parent: "fruity" },
  { id: "red-fruit", name: "Red Fruit", type: "subcategory", parent: "fruity" },
  { id: "black-fruit", name: "Black Fruit", type: "subcategory", parent: "fruity" },
  { id: "dried-fruit", name: "Dried Fruit", type: "subcategory", parent: "fruity" },

  { id: "flowers", name: "Flowers", type: "subcategory", parent: "floral" },

  { id: "herbs", name: "Herbs", type: "subcategory", parent: "herbaceous" },
  { id: "vegetal", name: "Vegetal", type: "subcategory", parent: "herbaceous" },
  { id: "grassy", name: "Grassy", type: "subcategory", parent: "herbaceous" },

  { id: "mineral", name: "Mineral", type: "subcategory", parent: "earthy" },
  { id: "earth", name: "Earth", type: "subcategory", parent: "earthy" },

  { id: "brown-spice", name: "Brown Spice", type: "subcategory", parent: "spice" },
  { id: "pepper", name: "Pepper", type: "subcategory", parent: "spice" },

  { id: "toasty", name: "Toasty", type: "subcategory", parent: "oak" },
  { id: "nutty", name: "Nutty", type: "subcategory", parent: "oak" },

  { id: "chemical", name: "Chemical", type: "subcategory", parent: "other" },
  { id: "fermented", name: "Fermented", type: "subcategory", parent: "other" },

  { id: "lemon", name: "Lemon", type: "aroma", parent: "citrus", wines: ["white", "rose", "sparkling"] },
  { id: "lime", name: "Lime", type: "aroma", parent: "citrus", wines: ["white", "rose", "sparkling"] },
  { id: "grapefruit", name: "Grapefruit", type: "aroma", parent: "citrus", wines: ["red", "white", "rose", "sparkling"] },
  { id: "orange", name: "Orange", type: "aroma", parent: "citrus", wines: ["red", "white", "rose", "sparkling"] },

  { id: "green-apple", name: "Green Apple", type: "aroma", parent: "tree-fruit", wines: ["white", "rose", "sparkling"] },
  { id: "pear", name: "Pear", type: "aroma", parent: "tree-fruit", wines: ["white", "rose", "sparkling"] },
  { id: "peach", name: "Peach", type: "aroma", parent: "tree-fruit", wines: ["white", "rose", "sparkling"] },

  { id: "pineapple", name: "Pineapple", type: "aroma", parent: "tropical-fruit", wines: ["white", "rose", "sparkling"] },
  { id: "mango", name: "Mango", type: "aroma", parent: "tropical-fruit", wines: ["rose", "sparkling"] },

  { id: "strawberry", name: "Strawberry", type: "aroma", parent: "red-fruit", wines: ["red", "rose", "sparkling"] },
  { id: "raspberry", name: "Raspberry", type: "aroma", parent: "red-fruit", wines: ["red", "white", "rose", "sparkling"] },
  { id: "cherry", name: "Cherry", type: "aroma", parent: "red-fruit", wines: ["red", "rose"] },

  { id: "blackberry", name: "Blackberry", type: "aroma", parent: "black-fruit", wines: ["red"] },
  { id: "blueberry", name: "Blueberry", type: "aroma", parent: "black-fruit", wines: ["red"] },

  { id: "raisin", name: "Raisin", type: "aroma", parent: "dried-fruit", wines: ["red", "white"] },

  { id: "rose-flower", name: "Rose", type: "aroma", parent: "flowers", wines: ["white", "rose", "sparkling"] },
  { id: "lavender", name: "Lavender", type: "aroma", parent: "flowers", wines: ["white", "rose", "sparkling"] },

  { id: "mint", name: "Mint", type: "aroma", parent: "herbs", wines: ["red", "white", "rose"] },
  { id: "thyme", name: "Thyme", type: "aroma", parent: "herbs", wines: ["rose", "sparkling"] },

  { id: "bell-pepper", name: "Bell Pepper", type: "aroma", parent: "vegetal", wines: ["red", "white", "rose"] },

  { id: "wet-stone", name: "Wet Stone", type: "aroma", parent: "mineral", wines: ["white", "sparkling"] },

  { id: "cinnamon", name: "Cinnamon", type: "aroma", parent: "brown-spice", wines: ["red", "rose"] },
  { id: "nutmeg", name: "Nutmeg", type: "aroma", parent: "brown-spice", wines: ["red", "white", "sparkling"] },
  { id: "allspice", name: "Allspice", type: "aroma", parent: "brown-spice", wines: ["red", "white", "rose"] },
  { id: "clove", name: "Clove", type: "aroma", parent: "brown-spice", wines: ["red", "rose"] },
  { id: "anise", name: "Anise", type: "aroma", parent: "brown-spice", wines: ["red"] },
  { id: "ginger", name: "Ginger", type: "aroma", parent: "brown-spice", wines: ["white", "sparkling"] },

  { id: "black-pepper", name: "Black Pepper", type: "aroma", parent: "pepper", wines: ["red"] },
  { id: "white-pepper", name: "White Pepper", type: "aroma", parent: "pepper", wines: ["red", "rose"] },
  { id: "pink-peppercorn", name: "Pink Peppercorn", type: "aroma", parent: "pepper", wines: ["rose"] },

  { id: "vanilla", name: "Vanilla", type: "aroma", parent: "toasty", wines: ["red", "white", "rose"] },
  { id: "toast", name: "Toast", type: "aroma", parent: "toasty", wines: ["red", "white", "rose", "sparkling"] },

  { id: "almond", name: "Almond", type: "aroma", parent: "nutty", wines: ["white", "sparkling"] },

  { id: "sulfur", name: "Sulfur", type: "aroma", parent: "chemical", wines: ["red", "white", "rose", "sparkling"] },
  { id: "tar", name: "Tar", type: "aroma", parent: "chemical", wines: ["red"] },

  { id: "yeast", name: "Yeasty", type: "aroma", parent: "fermented", wines: ["sparkling"] },
  { id: "bread", name: "Bread Dough", type: "aroma", parent: "fermented", wines: ["sparkling"] },
];

export const aromaCategories = aromaNodes.filter(
  (node) => node.type === "category" && node.parent === "root"
);

export const getAromasByCategory = (
  categoryId: string,
  wine?: WineType
): AromaNode[] => {
  const subcategories = aromaNodes.filter(
    (node) => node.parent === categoryId && node.type === "subcategory"
  );
  const subcategoryIds = new Set(subcategories.map((node) => node.id));

  return aromaNodes.filter((node) => {
    if (node.type !== "aroma" || !node.parent || !subcategoryIds.has(node.parent)) {
      return false;
    }

    return wine ? node.wines?.includes(wine) ?? false : true;
  });
};
