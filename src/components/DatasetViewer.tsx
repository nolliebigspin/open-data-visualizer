"use client";

import { Datapoint, DatasetMeta, Transformer, Visualization } from "@/types";
import Papa from "papaparse";
import { useEffect, useState } from "react";
import LineChartView from "./charts/LineChartView";
import DatasetSettings from "./DatasetSettings";
import { useViews } from "@/hooks/useViews";
import PieChartView from "./charts/PieChartView";
import MapView from "./charts/MapView";
import useDeviceDetect from "@/hooks/useDeviceDetect";

type DatasetViewerProps = {
  datasetMeta: DatasetMeta;
};

const DatasetViewer = ({ datasetMeta }: DatasetViewerProps) => {
  const { views } = useViews();
  const { isMobile } = useDeviceDetect();

  const parseCSV = (csvData: string): Array<Datapoint> => {
    const parsed = Papa.parse<Datapoint>(csvData, { header: true });
    return parsed.data;
  };

  const applyTransformers = (
    data: Array<Datapoint>,
    transformers?: Transformer | null
  ): Array<Datapoint> => {
    if (!transformers) return data;
    for (let row = 0; row < data.length; row += 1) {
      for (const col of Object.keys(data[row])) {
        if (Object.keys(transformers).includes(col)) {
          for (const t of Object.values(transformers[col])) {
            switch (t) {
              case "toString":
                data[row][col] = String(data[row][col]);
                break;
              case "cleanNumberString":
                data[row][col] = (data[row][col] as string)
                  .replace(".", "")
                  .replace(",", "");
                break;
              case "replaceCommaWithDot":
                data[row][col] = (data[row][col] as string).replace(",", ".");
                break;
              case "toInt":
                data[row][col] = parseInt(data[row][col] as string, 10);
                break;
            }
          }
        }
      }
    }

    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(datasetMeta.file);
      const csvData = await res.text();
      const data = applyTransformers(
        parseCSV(csvData),
        datasetMeta.transformers
      );

      views?.setCurrent(datasetMeta.views[0]);
      views?.setDataLength(data.length);
      views?.setData(data);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [datasetMeta]);

  return (
    <div className="py-8">
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row lg:items-start">
        <div>
          {views?.current?.visualizationType === Visualization.LINE && (
            <LineChartView
              data={
                views.current.rangeX
                  ? views.data?.slice(
                      views?.current.rangeX[0],
                      views?.current.rangeX[1]
                    )
                  : views.data
              }
              width={isMobile ? 400 : 800}
              height={isMobile ? 300 : 600}
              xAxis={views.current.xAxis}
              dataKeys={views.current.dataKeys}
              tickFormatter={views.current?.tickFormatter}
            />
          )}
          {views?.current?.visualizationType === Visualization.PIE && (
            <PieChartView
              data={views.data?.[views.current.pieRow || 1]}
              width={isMobile ? 450 : 800}
              height={isMobile ? 450 : 600}
              radius={isMobile ? 200 : 250}
              cx={isMobile ? 200 : 300}
              cy={isMobile ? 200 : 300}
              dataKeys={views.current.dataKeys}
            />
          )}
          {views?.current?.visualizationType === Visualization.MAP && (
            <MapView
              // TODO: Better type definition
              marker={views.data?.map((item) => ({
                longitude: Number(
                  item.Longitude ? item.Longitude : item.Längengrad
                ),
                latitude: Number(
                  item.Latitude ? item.Latitude : item.Breitengrad
                ),
              }))}
            />
          )}
        </div>
        <DatasetSettings
          file={datasetMeta.file}
          viewPresets={datasetMeta.views}
        />
      </div>
      <div className="mt-4 flex flex-col">
        <strong>Beschreibung des aktuell ausgewählten Presets:</strong>
        <p className="w-3/5">{views?.current?.viewDescription}</p>
      </div>
    </div>
  );
};

export default DatasetViewer;
