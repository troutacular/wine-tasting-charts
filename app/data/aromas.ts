// File: data/aromas.ts

export type WineType = "red" | "white" | "rose" | "sparkling";

export type NodeType = "category" | "subcategory" | "aroma";
export type AromaTier = "primary" | "secondary" | "tertiary";

export interface AromaNode {
  id: string;
  name: string;
  type: NodeType;
  tier?: AromaTier;
  parent?: string;
  wines?: WineType[];
  wset?: boolean;
}

export interface AromaGroup {
  subcategory: AromaNode;
  aromas: AromaNode[];
}

export const aromaNodes: AromaNode[] = [
  // --- Categories ---
  { id: "floral", name: "Floral", type: "category", tier: "primary" },
  { id: "fruity", name: "Fruity", type: "category", tier: "primary" },
  { id: "spice-primary", name: "Spice", type: "category", tier: "primary" },
  { id: "herbaceous", name: "Herbaceous", type: "category", tier: "primary" },
  { id: "mineral", name: "Mineral", type: "category", tier: "primary" },
  { id: "sweet-primary", name: "Sweet", type: "category", tier: "primary" },

  { id: "yeast", name: "Yeast", type: "category", tier: "secondary" },
  { id: "malolactic", name: "Malolactic", type: "category", tier: "secondary" },
  { id: "nut-cocoa", name: "Nut/Cocoa", type: "category", tier: "secondary" },
  { id: "spice-secondary", name: "Spices", type: "category", tier: "secondary" },
  { id: "toasty", name: "Toasty", type: "category", tier: "secondary" },

  { id: "earthy", name: "Earthy", type: "category", tier: "tertiary" },
  { id: "dried-fruit", name: "Dried Fruit", type: "category", tier: "tertiary" },
  { id: "tobacco", name: "Tobacco", type: "category", tier: "tertiary" },
  { id: "umami", name: "Umami", type: "category", tier: "tertiary" },
  { id: "other", name: "Other", type: "category", tier: "tertiary" },

  // --- Subcategories ---

  // --- Primary
  // --- Floral is just one root category
  { id: "green-fruit", name: "Green Fruit", type: "subcategory", parent: "fruity" },
  { id: "citrus", name: "Citrus", type: "subcategory", parent: "fruity" },
  { id: "stone-fruit", name: "Stone Fruit", type: "subcategory", parent: "fruity" },
  { id: "tree-fruit", name: "Tree Fruit", type: "subcategory", parent: "fruity" },
  { id: "melon", name: "Melon", type: "subcategory", parent: "fruity" },
  { id: "tropical-fruit", name: "Tropical Fruit", type: "subcategory", parent: "fruity" },
  { id: "red-fruit", name: "Red Fruit", type: "subcategory", parent: "fruity" },
  { id: "black-fruit", name: "Black Fruit", type: "subcategory", parent: "fruity" },

  { id: "sweet-primary", name: "Sweet: Primary", type: "subcategory", parent: "sweet" },

  // Spice: Primary is just one root category

  { id: "resinous-herbs", name: "Resinous Herbs", type: "subcategory", parent: "herbaceous" },
  { id: "herbs", name: "Herbs", type: "subcategory", parent: "herbaceous" },
  { id: "grassy", name: "Grassy", type: "subcategory", parent: "herbaceous" },
  { id: "fresh-greens", name: "Fresh Green", type: "subcategory", parent: "herbaceous" },

  // -- Secondary
  // Yeast is just one root category
  // Malolactic is just one root category
  // Spice: Secondary is just one root category

  { id: "caramelized", name: "Caramelized", type: "subcategory", parent: "sweet" },
  { id: "botrytis", name: "Botrytis", type: "subcategory", parent: "spice-secondary" },

  { id: "cocoa", name: "Cocoa", type: "subcategory", parent: "nut-cocoa" },
  { id: "nutty", name: "Nutty", type: "subcategory", parent: "nut-cocoa" },

  { id: "burnt", name: "Burnt", type: "subcategory", parent: "toasty" },

  // -- Tertiary
  // Tobacco is just one root category
  // Umami is just one root category
  { id: "tea", name: "Tea", type: "subcategory", parent: "toasty" },
  { id: "pungent", name: "Pungent", type: "subcategory", parent: "other" },
  { id: "chemical", name: "Chemical", type: "subcategory", parent: "other" },
  { id: "sulfur", name: "Sulfur", type: "subcategory", parent: "other" },
  { id: "cork-taint", name: "Cork Taint", type: "subcategory", parent: "other" },

  // Dried Fruit is just one root category

  { id: "earthy-earthy", name: "Earthy", type: "subcategory", parent: "earthy" },
  { id: "soil", name: "Soil", type: "subcategory", parent: "earthy" },
  { id: "brettanomyces", name: "BRettanomyces", type: "subcategory", parent: "earthy" },

  // --- Aromoas: sorted

  // --- Primary: Floral
  { id: "acacia-flower", name: "Acacia Flower", type: "aroma", parent: "floral", wines: ["white", "sparkling"] },
  { id: "bergamot", name: "Bergamot", type: "aroma", parent: "floral", wines: ["red", "white"] },
  { id: "blossom", name: "Blossom", type: "aroma", parent: "floral", wines: ["white", "sparkling", "rose"], wset: true },
  { id: "chamomile", name: "Chamomile", type: "aroma", parent: "floral", wines: ["white", "sparkling"] },
  { id: "daffodil", name: "Daffodil", type: "aroma", parent: "floral", wines: ["white"] },
  { id: "elderflower", name: "Elderflower", type: "aroma", parent: "floral", wines: ["white", "sparkling"] },
  { id: "geranium", name: "Geranium", type: "aroma", parent: "floral", wines: ["white", "sparkling"] },
  { id: "hibiscus", name: "Hibiscus", type: "aroma", parent: "floral", wines: ["red", "sparkling", "rose"] },
  { id: "honeysuckle", name: "Honeysuckle", type: "aroma", parent: "floral", wines: ["white", "sparkling", "rose"] },
  { id: "iris", name: "Iris", type: "aroma", parent: "floral", wines: ["red"] },
  { id: "jasmine", name: "Jasmine", type: "aroma", parent: "floral", wines: ["white", "sparkling"] },
  { id: "lavender", name: "Lavender", type: "aroma", parent: "floral", wines: ["red", "white", "sparkling", "rose"] },
  { id: "lilac", name: "Lilac", type: "aroma", parent: "floral", wines: ["red"] },
  { id: "lily", name: "Lily", type: "aroma", parent: "floral", wines: ["white", "sparkling"] },
  { id: "orange-blossom", name: "Orange Blossom", type: "aroma", parent: "floral", wines: ["white", "sparkling", "rose"] },
  { id: "peony", name: "Peony", type: "aroma", parent: "floral", wines: ["red", "white"] },
  { id: "potpourri", name: "Potpourri", type: "aroma", parent: "floral", wines: ["white"] },
  { id: "rhubarb", name: "Rhubarb", type: "aroma", parent: "floral", wines: ["red", "sparkling"] },
  { id: "rose", name: "Rose", type: "aroma", parent: "floral", wines: ["red", "white", "sparkling", "rose"], wset: true },
  { id: "violet", name: "Violet", type: "aroma", parent: "floral", wines: ["red", "white", "rose"], wset: true },

  // -- Primary: Fruity: Green Fruit
  { id: "apple-green", name: "Apple: Green", type: "aroma", parent: "green-fruit", wines: ["white","sparkling","rose"], wset: true},
  { id: "gooseberry", name: "Gooseberry", type: "aroma", parent: "green-fruit", wines: ["white","sparkling","rose"], wset: true},
  { id: "pear", name: "Pear", type: "aroma", parent: "green-fruit", wines: ["white","sparkling"], wset: true},
  { id: "grape-green", name: "Grape: Green", type: "aroma", parent: "green-fruit", wines: ["white","sparkling"], wset: true},

  // --- Primary: Fruity: Citrus
  { id: "blood-orange", name: "Blood Orange", type: "aroma", parent: "citrus", wines: ["red","sparkling","rose"]},
  { id: "citrus-pith", name: "Citrus Pith", type: "aroma", parent: "citrus", wines: ["white","sparkling","rose"]},
  { id: "grapefruit", name: "Grapefruit", type: "aroma", parent: "citrus", wines: ["red","white","sparkling","rose"], wset: true},
  { id: "lemon", name: "Lemon", type: "aroma", parent: "citrus", wines: ["white","sparkling","rose"], wset: true},
  { id: "lemon-zest", name: "Lemon Zest", type: "aroma", parent: "citrus", wines: ["white","sparkling","rose"]},
  { id: "lime", name: "Lime", type: "aroma", parent: "citrus", wines: ["white","sparkling","rose"], wset: true},
  { id: "lime-zest", name: "Lime Zest", type: "aroma", parent: "citrus", wines: ["white","sparkling","rose"]},
  { id: "mandarin-orange", name: "Mandarin Orange", type: "aroma", parent: "citrus", wines: ["white","sparkling","rose"]},
  { id: "meyer-lemon", name: "Meyer Lemon", type: "aroma", parent: "citrus", wines: ["white","sparkling","rose"]},
  { id: "orange", name: "Orange", type: "aroma", parent: "citrus", wines: ["red"], wset: true},
  { id: "orange-zest", name: "Orange Zest", type: "aroma", parent: "citrus", wines: ["white","sparkling","rose"]},
  { id: "pink-grapefruit", name: "Pink Grapefruit", type: "aroma", parent: "citrus", wines: ["rose"]},
  { id: "tangerine", name: "Tangerine", type: "aroma", parent: "citrus", wines: ["white","rose"]},
  { id: "yuzu", name: "Yuzu", type: "aroma", parent: "citrus", wines: ["sparkling"]},

  // -- Primary: Fruity: Stone Fruit
  { id: "apricot", name: "Apricot", type: "aroma", parent: "stone-fruit", wines: ["white","sparkling","rose"], wset: true},
  { id: "peach", name: "Peach", type: "aroma", parent: "stone-fruit", wines: ["red","white","rose"], wset: true},
  { id: "nectarine", name: "Nectarine", type: "aroma", parent: "stone-fruit", wines: ["white","sparkling","rose"], wset: true},

  // --- Primary: Fruity: Tree Fruit
  { id: "apple-cooked", name: "Apple: Cooked", type: "aroma", parent: "tree-fruit", wines: ["red","sparkling","rose"]},
  { id: "apple-yellow", name: "Apple: Yellow", type: "aroma", parent: "tree-fruit", wines: ["white","sparkling","rose"]},
  { id: "mirabelle-plum", name: "Mirabelle Plum", type: "aroma", parent: "tree-fruit", wines: ["sparkling"]},
  { id: "pear-asian", name: "Pear: Asian", type: "aroma", parent: "tree-fruit", wines: ["white","sparkling","rose"]},
  { id: "persimmon", name: "Persimmon", type: "aroma", parent: "tree-fruit", wines: ["red","white","rose"]},
  { id: "quince", name: "Quince", type: "aroma", parent: "tree-fruit", wines: ["white","sparkling"]},
  { id: "white-peach", name: "White Peach", type: "aroma", parent: "tree-fruit", wines: ["white","sparkling"]},

  // --- Primary: Fruity: Melon
  { id: "cantaloupe", name: "Cantaloupe", type: "aroma", parent: "melon", wines: ["white","rose"]},
  { id: "honeydew", name: "Honeydew", type: "aroma", parent: "melon", wines: ["white","sparkling","rose"]},
  { id: "melon", name: "Melon", type: "aroma", parent: "melon", wines: ["white","sparkling","rose"], wset: true},
  { id: "watermelon", name: "Watermelon", type: "aroma", parent: "melon", wines: ["rose"]},

  // --- Primary: Fruity: Tropical Fruit
  { id: "banana", name: "Banana", type: "aroma", parent: "tropical-fruit", wines: ["red"], wset: true},
  { id: "dragon-fruit", name: "Dragon Fruit", type: "aroma", parent: "tropical-fruit", wines: ["red","rose"]},
  { id: "green-guava", name: "Green Guava", type: "aroma", parent: "tropical-fruit", wines: ["white"]},
  { id: "guava", name: "Guava", type: "aroma", parent: "tropical-fruit", wines: ["sparkling","rose"]},
  { id: "jackfruit", name: "Jackfruit", type: "aroma", parent: "tropical-fruit", wines: ["white","rose"]},
  { id: "kiwi", name: "Kiwi", type: "aroma", parent: "tropical-fruit", wines: ["sparkling"]},
  { id: "lychee", name: "Lychee", type: "aroma", parent: "tropical-fruit", wines: ["white","sparkling","rose"], wset: true},
  { id: "mango", name: "Mango", type: "aroma", parent: "tropical-fruit", wines: ["white","sparkling","rose"], wset: true},
  { id: "passionfruit", name: "Passionfruit", type: "aroma", parent: "tropical-fruit", wines: ["white","rose"], wset: true},
  { id: "pineapple", name: "Pineapple", type: "aroma", parent: "tropical-fruit", wines: ["white","sparkling"], wset: true},
  { id: "starfruit", name: "Starfruit", type: "aroma", parent: "tropical-fruit", wines: ["white","sparkling","rose"]},

  // --- Primary: Fruity: Red Fruit
  { id: "cherry", name: "Cherry", type: "aroma", parent: "red-fruit", wines: ["red","rose"], wset: true},
  { id: "cherry-sour", name: "Cherry: Sour", type: "aroma", parent: "red-fruit", wines: ["red","sparkling","rose"]},
  { id: "cherry-white", name: "Cherry: White", type: "aroma", parent: "red-fruit", wines: ["white","sparkling","rose"]},
  { id: "cranberry", name: "Cranberry", type: "aroma", parent: "red-fruit", wines: ["red","sparkling","rose"], wset: true},
  { id: "currant-red", name: "Currant: Red", type: "aroma", parent: "red-fruit", wines: ["red","sparkling","rose"], wset: true},
  { id: "fruit-punch", name: "Fruit Punch", type: "aroma", parent: "red-fruit", wines: ["red","rose"]},
  { id: "plum-red", name: "Plum: Red", type: "aroma", parent: "red-fruit", wines: ["red","rose"], wset: true},
  { id: "pomegranate", name: "Pomegranate", type: "aroma", parent: "red-fruit", wines: ["red","rose"]},
  { id: "raspberry", name: "Raspberry", type: "aroma", parent: "red-fruit", wines: ["red","sparkling"], wset: true},
  { id: "raspberry-white", name: "Raspberry: White", type: "aroma", parent: "red-fruit", wines: ["white","sparkling","rose"]},
  { id: "strawberry", name: "Strawberry", type: "aroma", parent: "red-fruit", wines: ["red","white","sparkling","rose"], wset: true},
  { id: "strawberry-wild", name: "Strawberry: Wild", type: "aroma", parent: "red-fruit", wines: ["sparkling"]},

  // --- Primary: Fruity: Black Fruit
  { id: "berry-bramble", name: "Berry Bramble", type: "aroma", parent: "black-fruit", wines: ["red"]},
  { id: "blackberry", name: "Blackberry", type: "aroma", parent: "black-fruit", wines: ["red","sparkling","rose"], wset: true},
  { id: "blueberry", name: "Blueberry", type: "aroma", parent: "black-fruit", wines: ["red","sparkling","rose"], wset: true},
  { id: "boysenberry", name: "Boysenberry", type: "aroma", parent: "black-fruit", wines: ["red","rose"]},
  { id: "cherry-black", name: "Cherry: Black", type: "aroma", parent: "black-fruit", wines: ["red","rose"], wset: true},
  { id: "currant-black", name: "Currant: Black", type: "aroma", parent: "black-fruit", wines: ["red","rose"], wset: true},
  { id: "olive-black", name: "Olive: Black", type: "aroma", parent: "black-fruit", wines: ["red"]},
  { id: "plum", name: "Plum", type: "aroma", parent: "black-fruit", wines: ["sparkling"], wset: true},
  { id: "plum-black", name: "Plum: Black", type: "aroma", parent: "red-fruit", wines: ["red"], wset: true},

  // --- Primary: Spice: Pepper
  { id: "chili-pepper", name: "Chili Pepper", type: "aroma", parent: "spice-primary", wines: ["red","rose"]},
  { id: "licorice", name: "Licorice", type: "aroma", parent: "spice-primary", wines: ["red"], wset: true},
  { id: "pepper-black", name: "Black Pepper", type: "aroma", parent: "spice-primary", wines: ["red"], wset: true},
  { id: "pepper-white", name: "Pepper: White", type: "aroma", parent: "spice-primary", wines: ["red","white","sparkling","rose"], wset: true},
  { id: "peppercorn-pink", name: "Peppercorn: Pink", type: "aroma", parent: "spice-primary", wines: ["white","sparkling","rose"]},

  // --- Primary: Herbaceous: Resinous Herbs
  { id: "oregano", name: "Oregano", type: "aroma", parent: "resinous-herbs", wines: ["red","white"]},
  { id: "pine-needle", name: "Pine Needle", type: "aroma", parent: "resinous-herbs", wines: ["white"]},
  { id: "rosemary", name: "Rosemary", type: "aroma", parent: "resinous-herbs", wines: ["red","rose"]},
  { id: "sage", name: "Sage", type: "aroma", parent: "resinous-herbs", wines: ["red","sparkling","rose"]},
  { id: "thyme", name: "Thyme", type: "aroma", parent: "resinous-herbs", wines: ["sparkling","rose"]},
  { id: "eucalytpus", name: "Eucalytpus", type: "aroma", parent: "resinous-herbs", wines: ["red"]},

  // --- Primary: Herbaceous: Herbs
  { id: "basil", name: "Basil", type: "aroma", parent: "herbs", wines: ["white"]},
  { id: "chervil", name: "Chervil", type: "aroma", parent: "herbs", wines: ["white"]},
  { id: "dill", name: "Dill", type: "aroma", parent: "herbs", wines: ["white"], wset: true},
  { id: "eucalyptus", name: "Eucalyptus", type: "aroma", parent: "herbs", wines: ["red","white"], wset: true},
  { id: "fennel", name: "Fennel", type: "aroma", parent: "herbs", wines: ["red","white"], wset: true},
  { id: "herbs-dried", name: "Herbs: Dried", type: "aroma", parent: "herbs", wines: ["white"], wset: true},
  { id: "lemon-verbena", name: "Lemon Verbena", type: "aroma", parent: "herbs", wines: ["white"]},
  { id: "lemongrass", name: "Lemongrass", type: "aroma", parent: "herbs", wines: ["white","sparkling","rose"]},
  { id: "marjoram", name: "Marjoram", type: "aroma", parent: "herbs", wines: ["red","white","sparkling","rose"]},
  { id: "menthol", name: "Menthol", type: "aroma", parent: "herbs", wines: ["red","sparkling"]},
  { id: "mint", name: "Mint", type: "aroma", parent: "herbs", wines: ["red","rose"], wset: true},
  { id: "tarragon", name: "Tarragon", type: "aroma", parent: "herbs", wines: ["white","sparkling","rose"]},
  { id: "peppercorn:green", name: "Peppercorn: Green", type: "aroma", parent: "herbs", wines: ["red"]},

  // --- Primary: Herbaceous: Grassy
  { id: "grass", name: "Grass", type: "aroma", parent: "grassy", wines: ["white","rose"], wset: true},
  { id: "hay", name: "Hay", type: "aroma", parent: "grassy", wines: ["white"]},

  // --- Primary: Herbaceous: Fresh Greens
  { id: "asparagus", name: "Asparagus", type: "aroma", parent: "fresh-greens", wines: ["white"], wset: true},
  { id: "bell-pepper", name: "Bell Pepper", type: "aroma", parent: "fresh-greens", wines: ["red","rose"], wset: true},
  { id: "celery", name: "Celery", type: "aroma", parent: "fresh-greens", wines: ["white","sparkling","rose"]},
  { id: "cucumber", name: "Cucumber", type: "aroma", parent: "fresh-greens", wines: ["rose"]},
  { id: "endive", name: "Endive", type: "aroma", parent: "fresh-greens", wines: ["rose"]},
  { id: "fennel", name: "Fennel", type: "aroma", parent: "fresh-greens", wines: ["white","sparkling","rose"]},
  { id: "jalapeño", name: "Jalapeño", type: "aroma", parent: "fresh-greens", wines: ["white"]},
  { id: "pea-shoot", name: "Pea Shoot", type: "aroma", parent: "fresh-greens", wines: ["white"]},
  { id: "tomato-leaf", name: "Tomato Leaf", type: "aroma", parent: "fresh-greens", wines: ["red","white","rose"], wset: true},

    // --- Primary: Sweet: Sweet
  { id: "beeswax", name: "Beeswax", type: "aroma", parent: "sweet-primary", wines: ["white","sparkling","rose"]},
  { id: "bubblegum", name: "Bubblegum", type: "aroma", parent: "sweet-primary", wines: ["red"]},
  { id: "coconut", name: "Coconut", type: "aroma", parent: "sweet-primary", wines: ["red","sparkling"], wset: true},
  { id: "lager", name: "Lager", type: "aroma", parent: "sweet-primary", wines: ["white","sparkling","rose"]},
  { id: "sour-cream", name: "Sour Cream", type: "aroma", parent: "sweet-primary", wines: ["sparkling","rose"]},

  // --- Primary: Earthy: Mineral
  { id: "crushed-gravel", name: "Crushed Gravel", type: "aroma", parent: "mineral", wines: ["red","white","sparkling","rose"]},
  { id: "graphite", name: "Graphite", type: "aroma", parent: "mineral", wines: ["red"]},
  { id: "petrichor", name: "Petrichor", type: "aroma", parent: "mineral", wines: ["red"]},
  { id: "sea-shell", name: "Sea Shell", type: "aroma", parent: "mineral", wines: ["white","sparkling","rose"]},
  { id: "wet-chalk", name: "Wet Chalk", type: "aroma", parent: "mineral", wines: ["white","sparkling","rose"]},
  { id: "wet-stone", name: "Wet Gravel", type: "aroma", parent: "mineral", wines: ["red","white","sparkling","rose"], wset: true},
  { id: "volcanic-rocks", name: "Volcanic Rocks", type: "aroma", parent: "mineral", wines: ["red"]},



  // --- Secondary: Yeast
  { id: "biscuit", name: "Biscuit", type: "aroma", parent: "yeast", wines: ["white","sparkling","rose"], wset: true},
  { id: "bread-dough", name: "Bread: Dough", type: "aroma", parent: "yeast", wines: ["white","sparkling","rose"], wset: true},
  { id: "bread-toasted", name: "Bread: Toasted", type: "aroma", parent: "yeast", wines: ["white","sparkling","rose"], wset: true},
  { id: "cheese-yeast", name: "Cheese: Yeasty", type: "aroma", parent: "yeast", wines: ["white","sparkling","rose"], wset: true},
  { id: "pastry", name: "Pastry", type: "aroma", parent: "yeast", wines: ["white","sparkling","rose"], wset: true},
  { id: "yogurt", name: "Yogurt", type: "aroma", parent: "yeast", wines: ["white","sparkling","rose"], wset: true},

  // --- Secondary: Malolactic conversion
  { id: "butter", name: "Butter", type: "aroma", parent: "malolactic", wines: ["red","white"]},
  { id: "buttermilk", name: "Buttermilk", type: "aroma", parent: "malolactic", wines: ["red","sparkling"]},
  { id: "cream", name: "Cream", type: "aroma", parent: "malolactic", wines: ["red"]},
  { id: "curd", name: "Curd", type: "aroma", parent: "malolactic", wines: ["white","sparkling"]},
  { id: "parmesan", name: "Parmesan", type: "aroma", parent: "malolactic", wines: ["sparkling"]},
  { id: "sour-cream", name: "Sour Cream", type: "aroma", parent: "malolactic", wines: ["sparkling"]},
  { id: "sourdough", name: "Sourdough", type: "aroma", parent: "malolactic", wines: ["sparkling"]},

  // --- Secondary: Sweet: Caramelized
  { id: "burnt-caramel", name: "Burnt Caramel", type: "aroma", parent: "caramelized", wines: ["red"]},
  { id: "caramel", name: "Caramel", type: "aroma", parent: "caramelized", wines: ["white","sparkling","rose"], wset: true},
  { id: "cola", name: "Cola", type: "aroma", parent: "caramelized", wines: ["red"]},
  { id: "honey", name: "Honey", type: "aroma", parent: "caramelized", wines: ["white","sparkling","rose"], wset: true},
  { id: "sugar-brown", name: "Sugar: Brown", type: "aroma", parent: "caramelized", wines: ["red"]},
  { id: "toffee", name: "Toffee", type: "aroma", parent: "caramelized", wines: ["white","sparkling","rose"]},

  // --- Secondary: Spice: Secondary
  { id: "allspice", name: "Allspice", type: "aroma", parent: "spice-secondary", wines: ["red","white","sparkling","rose"]},
  { id: "anise", name: "Anise", type: "aroma", parent: "spice-secondary", wines: ["red","white","sparkling","rose"]},
  { id: "baking-spices", name: "Baking Spices", type: "aroma", parent: "spice-secondary", wines: ["red","rose"]},
  { id: "chinese-5-spice", name: "Chinese 5 Spice", type: "aroma", parent: "spice-secondary", wines: ["red"]},
  { id: "cinnamon", name: "Cinnamon", type: "aroma", parent: "spice-secondary", wines: ["red","white","sparkling","rose"], wset: true},
  { id: "clove", name: "Clove", type: "aroma", parent: "spice-secondary", wines: ["red"], wset: true},
  { id: "nutmeg", name: "Nutmeg", type: "aroma", parent: "spice-secondary", wines: ["white","sparkling"], wset: true},
  { id: "vanilla", name: "Vanilla", type: "aroma", parent: "spice-secondary", wines: ["red","white","sparkling","rose"], wset: true},

  // --- Secondary: Spice: Botrytis
  { id: "ginger", name: "Ginger", type: "aroma", parent: "botrytis", wines: ["white","sparkling","rose"], wset: true},
  { id: "saffron", name: "Saffron", type: "aroma", parent: "botrytis", wines: ["white","sparkling"]},

  // --- Secondary: Nut / Cocoa: Cocoa
  { id: "carob", name: "Carob", type: "aroma", parent: "cocoa", wines: ["red"]},
  { id: "chocolate", name: "Chocolate", type: "aroma", parent: "cocoa", wines: ["red"], wset: true},
  { id: "cocoa", name: "Cocoa", type: "aroma", parent: "cocoa", wines: ["rose"]},
  { id: "cocoa-powder", name: "Cocoa Powder", type: "aroma", parent: "cocoa", wines: ["red"]},
  { id: "coffee", name: "Coffee", type: "aroma", parent: "burnt", wines: ["red"], wset: true},
  { id: "espresso", name: "Espresso", type: "aroma", parent: "cocoa", wines: ["red"], wset: true},

  // --- Secondary: Nut / Cocoa: Nutty
  { id: "almond", name: "Almond", type: "aroma", parent: "nutty", wines: ["white","sparkling","rose"], wset: true},
  { id: "brazilnut", name: "Brazilnut", type: "aroma", parent: "nutty", wines: ["white"]},
  { id: "hazelnut", name: "Hazelnut", type: "aroma", parent: "nutty", wines: ["white","sparkling"], wset: true},
  { id: "marzipan", name: "Marzipan", type: "aroma", parent: "nutty", wines: ["white","sparkling"]},
  { id: "pine-nut", name: "Pine Nut", type: "aroma", parent: "nutty", wines: ["sparkling"]},
  { id: "raw-almond", name: "Raw Almond", type: "aroma", parent: "nutty", wines: ["sparkling"]},

  // --- Secondary: Toasty: Burnt
  { id: "ash", name: "Ash", type: "aroma", parent: "burnt", wines: ["red"]},
  { id: "cedar", name: "Cedar", type: "aroma", parent: "burnt", wines: ["red"], wset: true},
  { id: "charred-wood", name: "Charred Wood", type: "aroma", parent: "burnt", wines: ["red"], wset: true},
  { id: "grilled", name: "Grilled", type: "aroma", parent: "burnt", wines: ["red"]},
  { id: "oak", name: "Oak", type: "aroma", parent: "burnt", wines: ["red"], wset: true},
  { id: "smoke", name: "Smoke", type: "aroma", parent: "burnt", wines: ["red","white","sparkling","rose"], wset: true},



  // --- Tertiary: Toasty: Tea
  { id: "black-tea", name: "Black Tea", type: "aroma", parent: "tea", wines: ["red","rose"]},

  // --- Tertiary: Toasty: Tobacco
  { id: "cigar-box", name: "Cigar Box", type: "aroma", parent: "tobacco", wines: ["red"]},
  { id: "tobacco-sweet", name: "Tobacco: Sweet", type: "aroma", parent: "tobacco", wines: ["red"]},
  { id: "tobacco-leaf", name: "Tobacco: Leaf", type: "aroma", parent: "tobacco", wines: ["red","rose"]},

  // --- Tertiary: Other: Pungent
  { id: "balsamic", name: "Balsamic", type: "aroma", parent: "pungent", wines: ["red"]},
  { id: "vinegar", name: "Vinegar", type: "aroma", parent: "pungent", wines: ["red","white","rose"]},
  { id: "sauerkraut", name: "Sauerkraut", type: "aroma", parent: "pungent", wines: ["sparkling"]},

  // --- Tertiary: Other: Chemical
  { id: "medicinal", name: "Medicinal", type: "aroma", parent: "chemical", wines: ["white","rose"]},
  { id: "new-plastic", name: "New Plastic", type: "aroma", parent: "chemical", wines: ["white","sparkling"]},
  { id: "oily", name: "Oily", type: "aroma", parent: "chemical", wines: ["rose"]},
  { id: "petrol", name: "Petrol", type: "aroma", parent: "chemical", wines: ["white","sparkling"], wset: true},
  { id: "tar", name: "Tar", type: "aroma", parent: "chemical", wines: ["red"]},

  // --- Tertiary: Other:  Sulfur
  { id: "boiled-eggs", name: "Boiled Eggs", type: "aroma", parent: "sulfur", wines: ["red"]},
  { id: "burnt-rubber", name: "Burnt Rubber", type: "aroma", parent: "sulfur", wines: ["red"]},
  { id: "cat-pee", name: "Cat Pee", type: "aroma", parent: "sulfur", wines: ["white","sparkling","rose"]},
  { id: "garlic", name: "Garlic", type: "aroma", parent: "sulfur", wines: ["red"]},
  { id: "green-onion", name: "Green Onion", type: "aroma", parent: "sulfur", wines: ["white"]},
  { id: "onion", name: "Onion", type: "aroma", parent: "sulfur", wines: ["sparkling","rose"]},
  { id: "struck-match", name: "Struck Match", type: "aroma", parent: "sulfur", wines: ["white","sparkling","rose"]},
  { id: "sweaty", name: "Sweaty", type: "aroma", parent: "sulfur", wines: ["sparkling"]},

  // --- Tertiary: Other: Umami
  { id: "bacon-fat", name: "Bacon Fat", type: "aroma", parent: "umami", wines: ["red","rose"]},
  { id: "leather", name: "Leather", type: "aroma", parent: "umami", wines: ["red","rose"], wset: true},
  { id: "mushroom", name: "Mushroom", type: "aroma", parent: "umami", wines: ["white","sparkling"], wset: true},
  { id: "marmalade", name: "Marmalade", type: "aroma", parent: "umami", wines: ["white"], wset: true},
  { id: "pastrami", name: "Pastrami", type: "aroma", parent: "umami", wines: ["red"]},
  { id: "roasted-meat", name: "Roasted Meat", type: "aroma", parent: "umami", wines: ["red"], wset: true},
  { id: "soy-sauce", name: "Soy Sauce", type: "aroma", parent: "umami", wines: ["red","white","sparkling"]},
  { id: "truffle", name: "Truffle", type: "aroma", parent: "umami", wines: ["red"]},

  // --- Tertiary: Other: Cork Taint
  { id: "wet-cardboard", name: "Wet Cardboard", type: "aroma", parent: "cork-taint", wines: ["red","white","sparkling","rose"], wset: true},

  // --- Tertiary: Fruity: Dried Fruit
  { id: "dried-apricot", name: "Dried Apricot", type: "aroma", parent: "dried-fruit", wines: ["sparkling"]},
  { id: "dried-cherry", name: "Dried Cherry", type: "aroma", parent: "dried-fruit", wines: ["rose"]},
  { id: "dried-cranberry", name: "Dried Cranberry", type: "aroma", parent: "dried-fruit", wines: ["rose"]},
  { id: "dried-fruit", name: "Dried Fruit", type: "aroma", parent: "dried-fruit", wines: ["red","white"], wset: true},
  { id: "fig", name: "Fig", type: "aroma", parent: "dried-fruit", wines: ["red","white","sparkling"]},
  { id: "fruit-leather", name: "Fruit Leather", type: "aroma", parent: "dried-fruit", wines: ["rose"]},
  { id: "fruitcake", name: "Fruitcake", type: "aroma", parent: "dried-fruit", wines: ["red"]},
  { id: "golden-raisin", name: "Golden Raisin", type: "aroma", parent: "dried-fruit", wines: ["white","sparkling"]},
  { id: "hoisin", name: "Hoisin", type: "aroma", parent: "dried-fruit", wines: ["red"]},
  { id: "prune", name: "Prune", type: "aroma", parent: "dried-fruit", wines: ["red"]},
  { id: "raisin", name: "Raisin", type: "aroma", parent: "dried-fruit", wines: ["red"]},

  // --- Tertiary: Earthy: Soil
  { id: "clay-pot", name: "Clay Pot", type: "aroma", parent: "soil", wines: ["red","rose"]},
  { id: "dusty", name: "Dusty", type: "aroma", parent: "soil", wines: ["red","white","sparkling","rose"], wset: true},
  { id: "forest-floor", name: "Forest Floor", type: "aroma", parent: "soil", wines: ["red"], wset: true},
  { id: "potting-soil", name: "Potting Soil", type: "aroma", parent: "soil", wines: ["red"]},
  { id: "red-beet", name: "Red Beet", type: "aroma", parent: "soil", wines: ["red"]},
  { id: "wet-leaves", name: "Wet Leaves", type: "aroma", parent: "soil", wines: ["red"], wset: true},

  // --- Tertiary: Earthy: Brettanomyces
  { id: "band-aid", name: "Band Aid", type: "aroma", parent: "brettanomyces", wines: ["red"]},
  { id: "black-cardamom", name: "Black Cardamom", type: "aroma", parent: "brettanomyces", wines: ["red"]},
  { id: "sweaty-saddle", name: "Sweaty Saddle", type: "aroma", parent: "brettanomyces", wines: ["red"]},
  { id: "horse-manure", name: "Horse Manure", type: "aroma", parent: "brettanomyces", wines: ["red"]},
];

export const aromaCategories: AromaNode[] = aromaNodes.filter(
  (node) => node.type === "category"
);

const wineMatches = (node: AromaNode, wine?: WineType): boolean =>
  wine ? node.wines?.includes(wine) ?? false : true;

export const getAromaGroupsByCategory = (
  categoryId: string,
  wine?: WineType
): AromaGroup[] => {
  const category = aromaNodes.find(
    (node) => node.id === categoryId && node.type === "category"
  );
  const subcategories = aromaNodes.filter(
    (node) => node.parent === categoryId && node.type === "subcategory"
  );

  const groups = subcategories
    .map((subcategory) => ({
      subcategory,
      aromas: aromaNodes.filter(
        (node) =>
          node.type === "aroma" &&
          node.parent === subcategory.id &&
          wineMatches(node, wine)
      ),
    }))
    .filter((group) => group.aromas.length > 0);

  const directAromas = aromaNodes.filter(
    (node) =>
      node.type === "aroma" &&
      node.parent === categoryId &&
      wineMatches(node, wine)
  );

  if (category && directAromas.length > 0) {
    groups.push({ subcategory: category, aromas: directAromas });
  }

  return groups;
};

// --- Helper ---
export const getAromasByCategory = (
  categoryId: string,
  wine?: WineType
): AromaNode[] =>
  getAromaGroupsByCategory(categoryId, wine).flatMap((group) => group.aromas);
