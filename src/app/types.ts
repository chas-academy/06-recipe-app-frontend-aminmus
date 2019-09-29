export interface SearchFilter {
  healthLabels?: HealthEnum[];
  dietLabels?: DietEnum[];
}

export enum HealthEnum {
  vegan = 'vegan',
  vegetarian = 'vegetarian',
  sugarConscious = 'sugarConscious',
  peanutFree = 'peanutFree',
  treeNutFree = 'treeNutFree',
  alcoholFree = 'alcoholFree',
}

export enum DietEnum {
  balanced = 'balanced',
  highProtein = 'highProtein',
  lowFat = 'lowFat',
  lowCarb = 'lowCarb',
}

export interface Recipe {
  encodedUri: string;
  label: string;
  image: string;
  source: string;
  ingredients: string[];
  sourceUrl?: string;
  servings?: number;
  calories?: number;
  totalWeight?: number;
  totalNutrients?: object;
  dietLabels?: string[];
  healthLabels?: string[];
}
