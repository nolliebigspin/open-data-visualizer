import {
  Coordinates,
  DatasetCategory,
  SortByFilter,
  Visualization,
} from "./types";

// Map
export const CENTER_SH: Coordinates = {
  longitude: 9.889410792497257,
  latitude: 54.06024769986015,
};

export const COLORS = [
  "#5EE298",
  "#2A6243",
  "#FF3C3C",
  "#888888",
  "#152A1E",
  "#0000FF",
  "#5EE298",
  "#FFA500",
  "#A52A2A",
];

export const DEFAULT_ZOOM = 7;

// Filter
export const allCategories = Object.values(DatasetCategory);

export const allVisualizations = Object.values(Visualization);

export const allSortByFilter = Object.values(SortByFilter);
