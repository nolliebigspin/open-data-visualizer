import { metadata } from "@/metadata";
import DatasetViewer from "@/components/DatasetViewer";
import ViewsProvider from "@/hooks/useViews";
import ContentContainer from "@/components/ContentContainer";

export async function generateStaticParams() {
  return metadata.map((items) => ({
    path: items.path,
  }));
}

type DatasetPageProps = {
  params: { path: string };
};

export default async function DatasetPage({ params }: DatasetPageProps) {
  const datasetMeta = metadata.filter((item) => item.path === params.path)[0];

  return (
    <ContentContainer>
      <main className="flex flex-col">
        <h1 className="text-center text-h3 font-bold lg:text-h1">
          {datasetMeta.title}
        </h1>
        <div className="mt-4 flex flex-col text-center">
          <div>{datasetMeta.description}</div>
        </div>
        <ViewsProvider>
          <DatasetViewer datasetMeta={datasetMeta} />
        </ViewsProvider>
      </main>
    </ContentContainer>
  );
}
