"use client";

import { allCategories, allSortByFilter, allVisualizations } from "@/constants";
import { useFilter } from "@/hooks/useFilter";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const SelectionFilter = () => {
  const [searchInput, setSearchInput] = useState("");

  const { filter } = useFilter();

  return (
    <>
      <div className="flex h-[600px] flex-col gap-4 rounded-lg bg-primary p-4 text-text shadow-lg">
        <h3 className="text-center text-h3 font-bold">Filter</h3>
        <div className="relative flex flex-col">
          <label htmlFor="search" className="text-sm font-bold">
            SUCHBEGRIFF
          </label>
          <input
            id="search"
            name="search"
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="h-8 w-full pl-2 pr-8 text-text"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                filter?.updateSearch(searchInput);
              }
            }}
          />
          <button
            className="absolute right-2 top-1/2"
            onClick={() => {
              filter?.updateSearch(searchInput);
            }}
          >
            <FaArrowRight size={20} />
          </button>
        </div>
        <div className="flex flex-col">
          <label htmlFor="KATEGORIE" className="text-sm font-bold">
            KATEGORIE
          </label>
          <ul>
            {allCategories.map((category, index) => (
              <li className="flex gap-2" key={index}>
                <input
                  type="checkbox"
                  id={category}
                  checked={filter?.categories.includes(category)}
                  onChange={(e) =>
                    filter?.updateCategories(category, e.target.checked)
                  }
                  className="cursor-pointer accent-accent"
                />
                <label htmlFor={category} className="cursor-pointer">
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <label htmlFor="KATEGORIE" className="text-sm font-bold">
            VISUALISIERUNGSTYPEN
          </label>
          <ul>
            {allVisualizations.map((visualization, index) => (
              <li className="flex gap-2" key={index}>
                <input
                  type="checkbox"
                  id={visualization}
                  checked={filter?.visualizations.includes(visualization)}
                  onChange={(e) =>
                    filter?.updateVisualizations(
                      visualization,
                      e.target.checked
                    )
                  }
                  className="cursor-pointer accent-accent"
                />
                <label htmlFor={visualization} className="cursor-pointer">
                  {visualization}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex flex-col">
            <label className="text-sm font-bold" htmlFor="sortBy">
              SORTIEREN
            </label>
            <select
              id="sortBy"
              className="p-2"
              value={filter?.sortBy}
              onChange={(e) => filter?.updateSortBy(e.target.value)}
            >
              {allSortByFilter.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="mt-1">
        <strong>{filter?.filteredDatasets?.length}</strong> Ergebnisse gefunden
      </div>
    </>
  );
};

export default SelectionFilter;
