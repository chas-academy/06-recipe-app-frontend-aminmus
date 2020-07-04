export interface Entity {
  createdAt?: Date;
  updatedAt?: Date;
}

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

export interface Recipe extends Entity {
  encodedUri: string;
  label: string;
  image: string;
  source?: string;
  ingredients?: string[];
  sourceUrl?: string;
  servings?: number;
  calories?: number;
  totalWeight?: number;
  totalNutrients?: object;
  dietLabels?: string[];
  healthLabels?: string[];
}

export interface RecipeList extends Entity {
  id: string;
  name: string;
  recipes: Recipe[];
}

export interface ICheckBoxItem {
  id?: string;
  selected: boolean;
  name: string;
}
