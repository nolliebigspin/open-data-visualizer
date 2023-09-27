"use client";
import { metadata } from "@/metadata";
import Link from "next/link";
import DatasetItem from "./DatasetItem";
import { useFilter } from "@/hooks/useFilter";

const DatasetItemsGrid = () => {
  const { filter } = useFilter();
  return (
    <>
      {filter?.filteredDatasets && filter.filteredDatasets.length > 0 ? (
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filter?.filteredDatasets.map((item, index) => (
            <Link href={`/datasets/${item.path}`} key={index}>
              <DatasetItem
                title={item.title}
                description={item.description}
                category={item.category}
                createdAt={item.createdAt}
              />
            </Link>
          ))}
        </div>
      ) : (
        <div className="text text w-full text-h5 font-bold">
          Keine Ergebnisse gefunden. Bitte passen Sie Ihren Suchfilter an.
        </div>
      )}
    </>
  );
};

export default DatasetItemsGrid;
