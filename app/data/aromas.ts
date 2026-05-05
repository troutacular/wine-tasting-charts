// File: data/aromas.ts

export type WineType = "red" | "white" | "rose" | "sparkling";

export type NodeType = "category" | "subcategory" | "aroma";

export interface AromaNode {
  id: string;
  name: string;
  type: NodeType;
  parent?: string;
  wines?: WineType[];
}

export interface AromaGroup {
  subcategory: AromaNode;
  aromas: AromaNode[];
}

export const aromaNodes: AromaNode[] = [
  // --- Categories ---
  { id: "floral", name: "Floral", type: "category" },
  { id: "fruity", name: "Fruity", type: "category" },
  { id: "sweet", name: "Sweet", type: "category" },
  { id: "spice", name: "Spice", type: "category" },
  { id: "nut-cocoa", name: "Nut/Cocoa", type: "category" },
  { id: "toasty", name: "Toasty", type: "category" },
  { id: "other", name: "Other", type: "category" },
  { id: "earthy", name: "Earthy", type: "category" },
  { id: "herbaceous", name: "Herbaceous", type: "category" },

  // --- Subcategories ---

  // --- Floral is just one root category
  // { id: "floral", name: "floral", type: "subcategory", parent: "floral" },

  { id: "citrus", name: "Citrus", type: "subcategory", parent: "fruity" },
  { id: "tree-fruit", name: "Tree Fruit", type: "subcategory", parent: "fruity" },
  { id: "melon", name: "Melon", type: "subcategory", parent: "fruity" },
  { id: "tropical-fruit", name: "Tropical Fruit", type: "subcategory", parent: "fruity" },
  { id: "red-fruit", name: "Red Fruit", type: "subcategory", parent: "fruity" },
  { id: "black-fruit", name: "Black Fruit", type: "subcategory", parent: "fruity" },
  { id: "dried-fruit", name: "Dried Fruit", type: "subcategory", parent: "fruity" },

  { id: "sweet-sweet", name: "Sweet", type: "subcategory", parent: "sweet" },
  { id: "caramelized", name: "Caramelized", type: "subcategory", parent: "sweet" },

  { id: "brown-spice", name: "Brown Spice", type: "subcategory", parent: "spice" },
  { id: "botrytis", name: "Botrytis", type: "subcategory", parent: "spice" },
  { id: "pepper", name: "Pepper", type: "subcategory", parent: "spice" },

  { id: "nutty", name: "Nutty", type: "subcategory", parent: "nut-cocoa" },
  { id: "cocoa", name: "Cocoa", type: "subcategory", parent: "nut-cocoa" },

  { id: "tea", name: "Tea", type: "subcategory", parent: "toasty" },
  { id: "tobacco", name: "Tobacco", type: "subcategory", parent: "toasty" },
  { id: "burnt", name: "Burnt", type: "subcategory", parent: "toasty" },

  { id: "pungent", name: "Pungent", type: "subcategory", parent: "other" },
  { id: "sweet-other", name: "Sweet", type: "subcategory", parent: "other" },
  { id: "sour-fermented", name: "Sour/Fermented", type: "subcategory", parent: "other" },
  { id: "chemical", name: "Chemical", type: "subcategory", parent: "other" },
  { id: "sulfur", name: "Sulfur", type: "subcategory", parent: "other" },
  { id: "umami", name: "Umami", type: "subcategory", parent: "other" },
  { id: "cork-taint", name: "Cork Taint", type: "subcategory", parent: "other" },

  { id: "earthy-earthy", name: "Earthy", type: "subcategory", parent: "earthy" },
  { id: "soil", name: "Soil", type: "subcategory", parent: "earthy" },
  { id: "mineral", name: "Mineral", type: "subcategory", parent: "earthy" },
  { id: "brettanomyces", name: "BRettanomyces", type: "subcategory", parent: "earthy" },

  { id: "resinous-herbs", name: "Resinous Herbs", type: "subcategory", parent: "herbaceous" },
  { id: "herbs", name: "Herbs", type: "subcategory", parent: "herbaceous" },
  { id: "grassy", name: "Grassy", type: "subcategory", parent: "herbaceous" },
  { id: "fresh-greens", name: "Fresh Green", type: "subcategory", parent: "herbaceous" },

  // --- Aromoas: sorted

  // --- Floral
  { id: "acacia-flower", name: "Acacia Flower", type: "aroma", parent: "floral", wines: ["white", "sparkling"] },
  { id: "bergamot", name: "Bergamot", type: "aroma", parent: "floral", wines: ["red", "white"] },
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
  { id: "rose", name: "Rose", type: "aroma", parent: "floral", wines: ["red", "white", "sparkling", "rose"] },
  { id: "violet", name: "Violet", type: "aroma", parent: "floral", wines: ["red", "white", "rose"] },

  // --- Fruity: Citrus
  { id: "blood-orange", name: "Blood Orange", type: "aroma", parent: "citrus", wines: ["red","sparkling","rose"]},
  { id: "citrus-pith", name: "Citrus Pith", type: "aroma", parent: "citrus", wines: ["white","sparkling","rose"]},
  { id: "grapefruit", name: "Grapefruit", type: "aroma", parent: "citrus", wines: ["red","white","sparkling","rose"]},
  { id: "lemon", name: "Lemon", type: "aroma", parent: "citrus", wines: ["white","sparkling","rose"]},
  { id: "lemon-zest", name: "Lemon Zest", type: "aroma", parent: "citrus", wines: ["white","sparkling","rose"]},
  { id: "lime", name: "Lime", type: "aroma", parent: "citrus", wines: ["white","sparkling","rose"]},
  { id: "lime-zest", name: "Lime Zest", type: "aroma", parent: "citrus", wines: ["white","sparkling","rose"]},
  { id: "mandarin-orange", name: "Mandarin Orange", type: "aroma", parent: "citrus", wines: ["white","sparkling","rose"]},
  { id: "marmalade", name: "Marmalade", type: "aroma", parent: "citrus", wines: ["white"]},
  { id: "meyer-lemon", name: "Meyer Lemon", type: "aroma", parent: "citrus", wines: ["white","sparkling","rose"]},
  { id: "orange", name: "Orange", type: "aroma", parent: "citrus", wines: ["red"]},
  { id: "orange-zest", name: "Orange Zest", type: "aroma", parent: "citrus", wines: ["white","sparkling","rose"]},
  { id: "pink-grapefruit", name: "Pink Grapefruit", type: "aroma", parent: "citrus", wines: ["rose"]},
  { id: "tangerine", name: "Tangerine", type: "aroma", parent: "citrus", wines: ["white","rose"]},
  { id: "yuzu", name: "Yuzu", type: "aroma", parent: "citrus", wines: ["sparkling"]},

  // --- Fruity: Tree Fruit
  { id: "apricot", name: "Apricot", type: "aroma", parent: "tree-fruit", wines: ["white","sparkling","rose"]},
  { id: "asian-pear", name: "Asian Pear", type: "aroma", parent: "tree-fruit", wines: ["white","sparkling","rose"]},
  { id: "cooked-apple", name: "Cooked Apple", type: "aroma", parent: "tree-fruit", wines: ["red","sparkling","rose"]},
  { id: "green-apple", name: "Green Apple", type: "aroma", parent: "tree-fruit", wines: ["white","sparkling","rose"]},
  { id: "mirabelle-plum", name: "Mirabelle Plum", type: "aroma", parent: "tree-fruit", wines: ["sparkling"]},
  { id: "nectarine", name: "Nectarine", type: "aroma", parent: "tree-fruit", wines: ["white","sparkling","rose"]},
  { id: "peach", name: "Peach", type: "aroma", parent: "tree-fruit", wines: ["red","white","rose"]},
  { id: "pear", name: "Pear", type: "aroma", parent: "tree-fruit", wines: ["white","sparkling"]},
  { id: "persimmon", name: "Persimmon", type: "aroma", parent: "tree-fruit", wines: ["red","white","rose"]},
  { id: "quince", name: "Quince", type: "aroma", parent: "tree-fruit", wines: ["white","sparkling"]},
  { id: "white-peach", name: "White Peach", type: "aroma", parent: "tree-fruit", wines: ["white","sparkling"]},
  { id: "yellow-apple", name: "Yellow Apple", type: "aroma", parent: "tree-fruit", wines: ["white","sparkling","rose"]},

  // --- Fruity: Melon
  { id: "cantaloupe", name: "Cantaloupe", type: "aroma", parent: "melon", wines: ["white","rose"]},
  { id: "honeydew", name: "Honeydew", type: "aroma", parent: "melon", wines: ["white","sparkling","rose"]},
  { id: "watermelon", name: "Watermelon", type: "aroma", parent: "melon", wines: ["rose"]},

  // --- Fruity: Tropical Fruit
  { id: "banana", name: "Banana", type: "aroma", parent: "tropical-fruit", wines: ["red"]},
  { id: "dragon-fruit", name: "Dragon Fruit", type: "aroma", parent: "tropical-fruit", wines: ["red","rose"]},
  { id: "green-guava", name: "Green Guava", type: "aroma", parent: "tropical-fruit", wines: ["white"]},
  { id: "guava", name: "Guava", type: "aroma", parent: "tropical-fruit", wines: ["sparkling","rose"]},
  { id: "jackfruit", name: "Jackfruit", type: "aroma", parent: "tropical-fruit", wines: ["white","rose"]},
  { id: "kiwi", name: "Kiwi", type: "aroma", parent: "tropical-fruit", wines: ["sparkling"]},
  { id: "lychee", name: "Lychee", type: "aroma", parent: "tropical-fruit", wines: ["white","sparkling","rose"]},
  { id: "mango", name: "Mango", type: "aroma", parent: "tropical-fruit", wines: ["white","sparkling","rose"]},
  { id: "passionfruit", name: "Passionfruit", type: "aroma", parent: "tropical-fruit", wines: ["white","rose"]},
  { id: "pineapple", name: "Pineapple", type: "aroma", parent: "tropical-fruit", wines: ["white","sparkling"]},
  { id: "starfruit", name: "Starfruit", type: "aroma", parent: "tropical-fruit", wines: ["white","sparkling","rose"]},

  // --- Fruity: Red Fruit
  { id: "black-plum", name: "Black Plum", type: "aroma", parent: "red-fruit", wines: ["red"]},
  { id: "cherry", name: "Cherry", type: "aroma", parent: "red-fruit", wines: ["red","rose"]},
  { id: "cranberry", name: "Cranberry", type: "aroma", parent: "red-fruit", wines: ["red","sparkling","rose"]},
  { id: "fruit-punch", name: "Fruit Punch", type: "aroma", parent: "red-fruit", wines: ["red","rose"]},
  { id: "pomegranate", name: "Pomegranate", type: "aroma", parent: "red-fruit", wines: ["red","rose"]},
  { id: "raspberry", name: "Raspberry", type: "aroma", parent: "red-fruit", wines: ["red","sparkling"]},
  { id: "red-currant", name: "Red Currant", type: "aroma", parent: "red-fruit", wines: ["red","sparkling","rose"]},
  { id: "red-plum", name: "Red Plum", type: "aroma", parent: "red-fruit", wines: ["red","rose"]},
  { id: "sour-cherry", name: "Sour Cherry", type: "aroma", parent: "red-fruit", wines: ["red","sparkling","rose"]},
  { id: "strawberry", name: "Strawberry", type: "aroma", parent: "red-fruit", wines: ["red","white","sparkling","rose"]},
  { id: "white-cherry", name: "White Cherry", type: "aroma", parent: "red-fruit", wines: ["white","sparkling","rose"]},
  { id: "white-raspberry", name: "White Raspberry", type: "aroma", parent: "red-fruit", wines: ["white","sparkling","rose"]},
  { id: "wild-strawberry", name: "Wild Strawberry", type: "aroma", parent: "red-fruit", wines: ["sparkling"]},

  // --- Fruity: Black Fruit
  { id: "berry-bramble", name: "Berry Bramble", type: "aroma", parent: "black-fruit", wines: ["red"]},
  { id: "black-cherry", name: "Black Cherry", type: "aroma", parent: "black-fruit", wines: ["red","rose"]},
  { id: "black-currant", name: "Black Currant", type: "aroma", parent: "black-fruit", wines: ["red","rose"]},
  { id: "black-olive", name: "Black Olive", type: "aroma", parent: "black-fruit", wines: ["red"]},
  { id: "blackberry", name: "Blackberry", type: "aroma", parent: "black-fruit", wines: ["red","sparkling","rose"]},
  { id: "blueberry", name: "Blueberry", type: "aroma", parent: "black-fruit", wines: ["red","sparkling","rose"]},
  { id: "boysenberry", name: "Boysenberry", type: "aroma", parent: "black-fruit", wines: ["red","rose"]},
  { id: "plum", name: "Plum", type: "aroma", parent: "black-fruit", wines: ["sparkling"]},

  // --- Fruity: Dried Fruit
  { id: "dried-apricot", name: "Dried Apricot", type: "aroma", parent: "dried-fruit", wines: ["sparkling"]},
  { id: "dried-cherry", name: "Dried Cherry", type: "aroma", parent: "dried-fruit", wines: ["rose"]},
  { id: "dried-cranberry", name: "Dried Cranberry", type: "aroma", parent: "dried-fruit", wines: ["rose"]},
  { id: "fig", name: "Fig", type: "aroma", parent: "dried-fruit", wines: ["red","white","sparkling"]},
  { id: "fruit-leather", name: "Fruit Leather", type: "aroma", parent: "dried-fruit", wines: ["rose"]},
  { id: "fruitcake", name: "Fruitcake", type: "aroma", parent: "dried-fruit", wines: ["red"]},
  { id: "golden-raisin", name: "Golden Raisin", type: "aroma", parent: "dried-fruit", wines: ["white","sparkling"]},
  { id: "hoisin", name: "Hoisin", type: "aroma", parent: "dried-fruit", wines: ["red"]},
  { id: "prune", name: "Prune", type: "aroma", parent: "dried-fruit", wines: ["red"]},
  { id: "raisin", name: "Raisin", type: "aroma", parent: "dried-fruit", wines: ["red"]},

  // --- Sweet: Sweet
  { id: "beeswax", name: "Beeswax", type: "aroma", parent: "sweet-sweet", wines: ["white","sparkling","rose"]},
  { id: "bubblegum", name: "Bubblegum", type: "aroma", parent: "sweet-sweet", wines: ["red"]},
  { id: "coconut", name: "Coconut", type: "aroma", parent: "sweet-sweet", wines: ["red","sparkling"]},
  { id: "lager", name: "Lager", type: "aroma", parent: "sweet", wines: ["white","sparkling","rose"]},
  { id: "pastry", name: "Pastry", type: "aroma", parent: "sweet-sweet", wines: ["white","sparkling","rose"]},
  { id: "sour-cream", name: "Sour Cream", type: "aroma", parent: "sweet", wines: ["sparkling","rose"]},
  { id: "vanilla", name: "Vanilla", type: "aroma", parent: "sweet-sweet", wines: ["red","white","sparkling","rose"]},

  // --- Sweet: Caramelized
  { id: "brown-sugar", name: "Brown Sugar", type: "aroma", parent: "caramelized", wines: ["red"]},
  { id: "burnt-caramel", name: "Burnt Caramel", type: "aroma", parent: "caramelized", wines: ["red"]},
  { id: "caramel", name: "Caramel", type: "aroma", parent: "caramelized", wines: ["white","sparkling","rose"]},
  { id: "cola", name: "Cola", type: "aroma", parent: "caramelized", wines: ["red"]},
  { id: "honey", name: "Honey", type: "aroma", parent: "caramelized", wines: ["white","sparkling","rose"]},
  { id: "toffee", name: "Toffee", type: "aroma", parent: "caramelized", wines: ["white","sparkling","rose"]},

  // --- Spice: Brown Spice
  { id: "allspice", name: "Allspice", type: "aroma", parent: "brown-spice", wines: ["red","white","sparkling","rose"]},
  { id: "anise", name: "Anise", type: "aroma", parent: "brown-spice", wines: ["red","white","sparkling","rose"]},
  { id: "baking-spices", name: "Baking Spices", type: "aroma", parent: "brown-spice", wines: ["red","rose"]},
  { id: "chinese-5-spice", name: "Chinese 5 Spice", type: "aroma", parent: "brown-spice", wines: ["red"]},
  { id: "cinnamon", name: "Cinnamon", type: "aroma", parent: "brown-spice", wines: ["red","white","sparkling","rose"]},
  { id: "clove", name: "Clove", type: "aroma", parent: "brown-spice", wines: ["red"]},
  { id: "licorice", name: "Licorice", type: "aroma", parent: "brown-spice", wines: ["red"]},
  { id: "nutmeg", name: "Nutmeg", type: "aroma", parent: "brown-spice", wines: ["white","sparkling"]},

  // --- Spice: Botrytis
  { id: "ginger", name: "Ginger", type: "aroma", parent: "botrytis", wines: ["white","sparkling","rose"]},
  { id: "saffron", name: "Saffron", type: "aroma", parent: "botrytis", wines: ["white","sparkling"]},

  // --- Spice: Pepper
  { id: "black-pepper", name: "Black Pepper", type: "aroma", parent: "pepper", wines: ["red"]},
  { id: "chili-pepper", name: "Chili Pepper", type: "aroma", parent: "pepper", wines: ["red","rose"]},
  { id: "pink-peppercorn", name: "Pink Peppercorn", type: "aroma", parent: "pepper", wines: ["white","sparkling","rose"]},
  { id: "white-pepper", name: "White Pepper", type: "aroma", parent: "pepper", wines: ["red","white","sparkling","rose"]},

  // --- Nut / Cocoa: Nutty
  { id: "almond", name: "Almond", type: "aroma", parent: "nutty", wines: ["white","sparkling","rose"]},
  { id: "brazilnut", name: "Brazilnut", type: "aroma", parent: "nutty", wines: ["white"]},
  { id: "hazelnut", name: "Hazelnut", type: "aroma", parent: "nutty", wines: ["white","sparkling"]},
  { id: "marzipan", name: "Marzipan", type: "aroma", parent: "nutty", wines: ["white","sparkling"]},
  { id: "pine-nut", name: "Pine Nut", type: "aroma", parent: "nutty", wines: ["sparkling"]},
  { id: "raw-almond", name: "Raw Almond", type: "aroma", parent: "nutty", wines: ["sparkling"]},

  // --- Nut / Cocoa: Cocoa
  { id: "carob", name: "Carob", type: "aroma", parent: "cocoa", wines: ["red"]},
  { id: "chocolate", name: "Chocolate", type: "aroma", parent: "cocoa", wines: ["red"]},
  { id: "cocoa", name: "Cocoa", type: "aroma", parent: "cocoa", wines: ["rose"]},
  { id: "cocoa-powder", name: "Cocoa Powder", type: "aroma", parent: "cocoa", wines: ["red"]},
  { id: "espresso", name: "Espresso", type: "aroma", parent: "cocoa", wines: ["red"]},

  // --- Toasty: Tea
  { id: "black-tea", name: "Black Tea", type: "aroma", parent: "tea", wines: ["red","rose"]},

  // --- Toasty: Tobacco
  { id: "cigar-box", name: "Cigar Box", type: "aroma", parent: "tobacco", wines: ["red"]},
  { id: "sweet-tobacco", name: "Sweet Tobacco", type: "aroma", parent: "tobacco", wines: ["red"]},
  { id: "tobacco-leaf", name: "Tobacco Leaf", type: "aroma", parent: "tobacco", wines: ["red","rose"]},

  // --- Toasty: Burnt
  { id: "ash", name: "Ash", type: "aroma", parent: "burnt", wines: ["red"]},
  { id: "cedar", name: "Cedar", type: "aroma", parent: "burnt", wines: ["red"]},
  { id: "grilled", name: "Grilled", type: "aroma", parent: "burnt", wines: ["red"]},
  { id: "smoke", name: "Smoke", type: "aroma", parent: "burnt", wines: ["red","white","sparkling","rose"]},
  { id: "toasted-bread", name: "Toasted Bread", type: "aroma", parent: "burnt", wines: ["white","sparkling","rose"]},

  // --- Other: Pungent
  { id: "balsamic", name: "Balsamic", type: "aroma", parent: "pungent", wines: ["red"]},
  { id: "vinegar", name: "Vinegar", type: "aroma", parent: "pungent", wines: ["red","white","rose"]},
  { id: "sauerkraut", name: "Sauerkraut", type: "aroma", parent: "pungent", wines: ["sparkling"]},

  // --- Other: Sour / Fermented
  { id: "butter", name: "Butter", type: "aroma", parent: "sour-fermented", wines: ["red","white"]},
  { id: "buttermilk", name: "Buttermilk", type: "aroma", parent: "sour-fermented", wines: ["red","sparkling"]},
  { id: "cream", name: "Cream", type: "aroma", parent: "sour-fermented", wines: ["red"]},
  { id: "curd", name: "Curd", type: "aroma", parent: "sour-fermented", wines: ["white","sparkling"]},
  { id: "parmesan", name: "Parmesan", type: "aroma", parent: "sour-fermented", wines: ["sparkling"]},
  { id: "sour-cream", name: "Sour Cream", type: "aroma", parent: "sour-fermented", wines: ["sparkling"]},
  { id: "sourdough", name: "Sourdough", type: "aroma", parent: "sour-fermented", wines: ["sparkling"]},
  { id: "yogurt", name: "Yogurt", type: "aroma", parent: "sour-fermented", wines: ["red"]},

  // --- Other: Chemical
  { id: "medicinal", name: "Medicinal", type: "aroma", parent: "chemical", wines: ["white","rose"]},
  { id: "new-plastic", name: "New Plastic", type: "aroma", parent: "chemical", wines: ["white","sparkling"]},
  { id: "oily", name: "Oily", type: "aroma", parent: "chemical", wines: ["rose"]},
  { id: "petrol", name: "Petrol", type: "aroma", parent: "chemical", wines: ["white","sparkling"]},
  { id: "tar", name: "Tar", type: "aroma", parent: "chemical", wines: ["red"]},

  // --- Other:  Sulfur
  { id: "boiled-eggs", name: "Boiled Eggs", type: "aroma", parent: "sulfur", wines: ["red"]},
  { id: "burnt-rubber", name: "Burnt Rubber", type: "aroma", parent: "sulfur", wines: ["red"]},
  { id: "cat-pee", name: "Cat Pee", type: "aroma", parent: "sulfur", wines: ["white","sparkling","rose"]},
  { id: "garlic", name: "Garlic", type: "aroma", parent: "sulfur", wines: ["red"]},
  { id: "green-onion", name: "Green Onion", type: "aroma", parent: "sulfur", wines: ["white"]},
  { id: "onion", name: "Onion", type: "aroma", parent: "sulfur", wines: ["sparkling","rose"]},
  { id: "struck-match", name: "Struck Match", type: "aroma", parent: "sulfur", wines: ["white","sparkling","rose"]},
  { id: "sweaty", name: "Sweaty", type: "aroma", parent: "sulfur", wines: ["sparkling"]},

  // --- Other: Umami
  { id: "bacon-fat", name: "Bacon Fat", type: "aroma", parent: "umami", wines: ["red","rose"]},
  { id: "leather", name: "Leather", type: "aroma", parent: "umami", wines: ["red","rose"]},
  { id: "mushroom", name: "Mushroom", type: "aroma", parent: "umami", wines: ["white","sparkling"]},
  { id: "pastrami", name: "Pastrami", type: "aroma", parent: "umami", wines: ["red"]},
  { id: "roasted-meat", name: "Roasted Meat", type: "aroma", parent: "umami", wines: ["red"]},
  { id: "soy-sauce", name: "Soy Sauce", type: "aroma", parent: "umami", wines: ["red","white","sparkling"]},
  { id: "truffle", name: "Truffle", type: "aroma", parent: "umami", wines: ["red"]},

  // --- Other: Cork Taint
  { id: "wet-cardboard", name: "Wet Cardboard", type: "aroma", parent: "cork-taint", wines: ["red","white","sparkling","rose"]},

  // --- Earthy: Soil
  { id: "clay-pot", name: "Clay Pot", type: "aroma", parent: "soil", wines: ["red","rose"]},
  { id: "dusty", name: "Dusty", type: "aroma", parent: "soil", wines: ["red","white","sparkling","rose"]},
  { id: "potting-soil", name: "Potting Soil", type: "aroma", parent: "soil", wines: ["red"]},
  { id: "red-beet", name: "Red Beet", type: "aroma", parent: "soil", wines: ["red"]},

  // --- Earthy: Mineral
  { id: "crushed-gravel", name: "Crushed Gravel", type: "aroma", parent: "mineral", wines: ["red","white","sparkling","rose"]},
  { id: "sea-shell", name: "Sea Shell", type: "aroma", parent: "mineral", wines: ["white","sparkling","rose"]},
  { id: "wet-chalk", name: "Wet Chalk", type: "aroma", parent: "mineral", wines: ["white","sparkling","rose"]},
  { id: "volcanic-rocks", name: "Volcanic Rocks", type: "aroma", parent: "mineral", wines: ["red"]},
  { id: "graphite", name: "Graphite", type: "aroma", parent: "mineral", wines: ["red"]},
  { id: "petrichor", name: "Petrichor", type: "aroma", parent: "mineral", wines: ["red"]},

  // --- Earthy: Brettanomyces
  { id: "band-aid", name: "Band Aid", type: "aroma", parent: "brettanomyces", wines: ["red"]},
  { id: "black-cardamom", name: "Black Cardamom", type: "aroma", parent: "brettanomyces", wines: ["red"]},
  { id: "sweaty-saddle", name: "Sweaty Saddle", type: "aroma", parent: "brettanomyces", wines: ["red"]},
  { id: "horse-manure", name: "Horse Manure", type: "aroma", parent: "brettanomyces", wines: ["red"]},

  // --- Herbaceous: Resinous Herbs
  { id: "oregano", name: "Oregano", type: "aroma", parent: "resinous-herbs", wines: ["red","white"]},
  { id: "pine-needle", name: "Pine Needle", type: "aroma", parent: "resinous-herbs", wines: ["white"]},
  { id: "rosemary", name: "Rosemary", type: "aroma", parent: "resinous-herbs", wines: ["red","rose"]},
  { id: "sage", name: "Sage", type: "aroma", parent: "resinous-herbs", wines: ["red","sparkling","rose"]},
  { id: "thyme", name: "Thyme", type: "aroma", parent: "resinous-herbs", wines: ["sparkling","rose"]},
  { id: "eucalytpus", name: "Eucalytpus", type: "aroma", parent: "resinous-herbs", wines: ["red"]},

  // --- Herbaceous: Herbs
  { id: "basil", name: "Basil", type: "aroma", parent: "herbs", wines: ["white"]},
  { id: "chervil", name: "Chervil", type: "aroma", parent: "herbs", wines: ["white"]},
  { id: "dill", name: "Dill", type: "aroma", parent: "herbs", wines: ["white"]},
  { id: "lemon-verbena", name: "Lemon Verbena", type: "aroma", parent: "herbs", wines: ["white"]},
  { id: "lemongrass", name: "Lemongrass", type: "aroma", parent: "herbs", wines: ["white","sparkling","rose"]},
  { id: "marjoram", name: "Marjoram", type: "aroma", parent: "herbs", wines: ["red","white","sparkling","rose"]},
  { id: "menthol", name: "Menthol", type: "aroma", parent: "herbs", wines: ["red","sparkling"]},
  { id: "mint", name: "Mint", type: "aroma", parent: "herbs", wines: ["red","rose"]},
  { id: "tarragon", name: "Tarragon", type: "aroma", parent: "herbs", wines: ["white","sparkling","rose"]},
  { id: "green-peppercorn", name: "Green Peppercorn", type: "aroma", parent: "herbs", wines: ["red"]},

  // --- Herbaceous: Grassy
  { id: "grass", name: "Grass", type: "aroma", parent: "grassy", wines: ["white","rose"]},
  { id: "hay", name: "Hay", type: "aroma", parent: "grassy", wines: ["white"]},

  // --- Herbaceous: Fresh Greens
  { id: "asparagus", name: "Asparagus", type: "aroma", parent: "fresh-greens", wines: ["white"]},
  { id: "bell-pepper", name: "Bell Pepper", type: "aroma", parent: "fresh-greens", wines: ["red","rose"]},
  { id: "celery", name: "Celery", type: "aroma", parent: "fresh-greens", wines: ["white","sparkling","rose"]},
  { id: "cucumber", name: "Cucumber", type: "aroma", parent: "fresh-greens", wines: ["rose"]},
  { id: "endive", name: "Endive", type: "aroma", parent: "fresh-greens", wines: ["rose"]},
  { id: "fennel", name: "Fennel", type: "aroma", parent: "fresh-greens", wines: ["white","sparkling","rose"]},
  { id: "gooseberry", name: "Gooseberry", type: "aroma", parent: "fresh-greens", wines: ["white","sparkling","rose"]},
  { id: "jalapeño", name: "Jalapeño", type: "aroma", parent: "fresh-greens", wines: ["white"]},
  { id: "pea-shoot", name: "Pea Shoot", type: "aroma", parent: "fresh-greens", wines: ["white"]},
  { id: "tomato-leaf", name: "Tomato Leaf", type: "aroma", parent: "fresh-greens", wines: ["red","white","rose"]},


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
