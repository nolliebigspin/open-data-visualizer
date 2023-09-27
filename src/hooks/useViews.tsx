"use client";

import { Datapoint, DatasetView, Visualization } from "@/types";
import { createContext, ReactNode, useContext, useState } from "react";

type ViewsContextProps = {
  current?: DatasetView;
  setCurrent: (newView?: DatasetView) => void;
  data?: Array<Datapoint>;
  setData: (newData: Array<Datapoint>) => void;
  dataLength?: number;
  setDataLength: (newRowCount?: number) => void;
  visualizationType?: Visualization;
  setVisualizationType: (newType: Visualization) => void;
};
const ViewContext = createContext<ViewsContextProps | undefined>(undefined);

const ViewsProvider = ({ children }: { children: ReactNode }) => {
  const [rowCount, setRowCount] = useState<number>();
  const [current, setCurrent] = useState<DatasetView>();
  const [data, setData] = useState<Array<Datapoint>>([]);

  const dataLength = rowCount;

  const setDataLength = (newRowCount?: number) => setRowCount(newRowCount);

  const visualizationType = current?.visualizationType;

  const setVisualizationType = (newType?: Visualization) => {
    const keys = Object.keys(data[0]);
    if (newType === Visualization.LINE) {
      if (keys.length > 1) {
        setCurrent({
          ...current,
          xAxis: keys[0],
          dataKeys: keys,
          visualizationType: newType,
        });
      }
    }
    if (newType === Visualization.PIE) {
      setCurrent({
        ...current,
        dataKeys: keys,
        visualizationType: newType,
      });
    }
    if (newType === Visualization.MAP) {
      setCurrent({
        ...current,
        visualizationType: newType,
      });
    }
  };

  return (
    <ViewContext.Provider
      value={{
        current,
        setCurrent,
        data,
        setData,
        dataLength,
        setDataLength,
        visualizationType,
        setVisualizationType,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
};

export const useViews = () => {
  const views = useContext(ViewContext);

  return { views } as const;
};

export default ViewsProvider;
