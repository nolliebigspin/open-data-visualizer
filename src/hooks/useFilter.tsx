"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { allCategories, allSortByFilter, allVisualizations } from "@/constants";
import { metadata } from "@/metadata";
import {
  DatasetMeta,
  DatasetCategory,
  SortByFilter,
  Visualization,
} from "@/types";

type FilterContextProps = {
  updateSearch: (searchInput: string) => void;
  updateCategories: (updatedEntry: DatasetCategory, checked: boolean) => void;
  updateVisualizations: (updatedEntry: Visualization, checked: boolean) => void;
  updateSortBy: (value: string) => void;
  categories: DatasetCategory[];
  visualizations: Visualization[];
  sortBy: SortByFilter;
  filteredDatasets: DatasetMeta[];
};

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState(allCategories);
  const [visualizations, setVisualizations] = useState(allVisualizations);
  const [sortBy, setSortBy] = useState(SortByFilter.A_TO_Z);
  const [filteredDatasets, setFilteredDatasets] = useState(metadata);

  useEffect(() => {
    const filteredData = metadata
      .filter((dataset) =>
        dataset.title.toLowerCase().includes(search.toLowerCase())
      )
      .filter((dataset) => categories.includes(dataset.category))
      .filter((dataset) =>
        dataset.views.some(
          (view) =>
            view.visualizationType == null ||
            visualizations.includes(view.visualizationType)
        )
      )
      .sort((a, b) => {
        if (sortBy === SortByFilter.A_TO_Z) {
          return a.title.localeCompare(b.title);
        } else if (sortBy === SortByFilter.DATE) {
          return a.createdAt.getTime() - b.createdAt.getTime();
        }
        return 0;
      });

    setFilteredDatasets(filteredData);
  }, [search, categories, visualizations, sortBy]);

  const updateSearch = (searchInput: string) => {
    setSearch(searchInput);
  };

  const updateCategories = (
    updatedEntry: DatasetCategory,
    checked: boolean
  ) => {
    if (checked) {
      setCategories((prev) => [...prev, updatedEntry]);
    } else {
      setCategories((prev) => prev.filter((c) => c !== updatedEntry));
    }
    console.log(categories);
  };

  const updateVisualizations = (
    updatedEntry: Visualization,
    checked: boolean
  ) => {
    if (checked) {
      setVisualizations((prev) => [...prev, updatedEntry]);
    } else {
      setVisualizations((prev) => prev.filter((v) => v !== updatedEntry));
    }
  };

  const updateSortBy = (value: string) => {
    const selectedSortBy = allSortByFilter.find((item) => item === value);
    if (selectedSortBy) {
      setSortBy(selectedSortBy);
    }
  };

  return (
    <FilterContext.Provider
      value={{
        updateSearch,
        updateCategories,
        updateVisualizations,
        updateSortBy,
        categories,
        visualizations,
        sortBy,
        filteredDatasets,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const filter = useContext(FilterContext);

  return { filter } as const;
};

export default FilterProvider;
