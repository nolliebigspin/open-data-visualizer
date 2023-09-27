import ContentContainer from "@/components/ContentContainer";
import DatasetItemsGrid from "@/components/DatasetItemsGrid";
import SelectionFilter from "@/components/SelectionFilter";
import FilterProvider from "@/hooks/useFilter";

export default function DatasetSelectionRoot() {
  return (
    <main className="flex min-h-screen flex-col">
      <ContentContainer>
        <div className="mb-8 text-center">
          <div className="text-h1 font-bold">Datensätze</div>
          <div>
            Bitte wählen Sie einen Datensatz aus, den Sie betrachten möchten
          </div>
        </div>
        <FilterProvider>
          <div className="flex gap-16">
            <div className="w-1/5">
              <SelectionFilter />
            </div>
            <div className="w-4/5">
              <DatasetItemsGrid />
            </div>
          </div>
        </FilterProvider>
      </ContentContainer>
    </main>
  );
}
