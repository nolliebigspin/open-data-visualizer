import { useViews } from "@/hooks/useViews";
import { DatasetFile, DatasetView, Visualization } from "@/types";
import { useEffect, useState } from "react";
import DatasetAdvancedSettings from "./DatasetAdvancedSettings";
import SingleRangeSlider from "./SingeRangeSlider";
import MultiRangeSlider from "./MultiRangeSlider";

type DatasetSettingsProps = {
  file: DatasetFile;
  viewPresets: DatasetView[];
  allKey?: string[];
};

const DatasetSettings = ({ file, viewPresets }: DatasetSettingsProps) => {
  const { views } = useViews();
  const [advancedSettingsActive, setAdvancesSettingsActive] = useState(false);

  const [hasAxis, setHasAxis] = useState<boolean>(
    views?.visualizationType === Visualization.LINE
  );

  const [hasRowSelection, setHasRowSelection] = useState<boolean>(
    views?.visualizationType === Visualization.PIE
  );

  useEffect(() => {
    setHasRowSelection(views?.visualizationType === Visualization.PIE);
  }, [views]);

  useEffect(() => {
    setHasAxis(views?.visualizationType === Visualization.LINE);
  }, [views]);

  return (
    <div className="h-fit w-72 rounded-lg bg-primary p-4 text-text shadow-lg">
      <h3 className="text-center text-h3 font-bold">Einstellungen</h3>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="viewType" className="text-sm font-bold">
            PRESETS
          </label>
          <select
            className="p-2"
            id="viewType"
            value={views?.current?.viewTitle}
            onChange={(e) =>
              views?.setCurrent(
                viewPresets.filter(
                  (item) => item.viewTitle === e.target.value
                )[0]
              )
            }
            disabled={advancedSettingsActive}
          >
            {viewPresets.map((view, index) => (
              <option key={index} value={view.viewTitle}>
                {view.viewTitle}
              </option>
            ))}
          </select>
        </div>

        {hasRowSelection && (
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold" htmlFor="singleSlider">
              ZEILE
            </label>
            <SingleRangeSlider
              min={1}
              max={views?.dataLength ? views.dataLength - 1 : 1}
              startValue={[views?.current?.pieRow || 1]}
              step={1}
              onChange={(row) =>
                views?.setCurrent({ ...views.current, pieRow: row[0] })
              }
            />
          </div>
        )}

        {hasAxis && (
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold" htmlFor="multiSlider">
              X-BEREICH
            </label>
            <MultiRangeSlider
              min={0}
              max={(views?.dataLength && views.dataLength - 1) || 1}
              value={[
                views?.current?.rangeX?.[0] || 0,
                views?.current?.rangeX?.[1] || 1,
              ]}
              onChange={(value) =>
                views?.setCurrent({
                  ...views.current,
                  rangeX: [value[0], value[1]],
                })
              }
            />
          </div>
        )}

        <div className="mt-4 flex gap-2">
          <input
            type="checkbox"
            id="advancedSettings"
            checked={advancedSettingsActive}
            className="cursor-pointer accent-accent"
            onChange={() => setAdvancesSettingsActive(!advancedSettingsActive)}
          />
          <label htmlFor="advancedSettings" className="cursor-pointer">
            Erweiterte Einstellungen
          </label>
        </div>

        <DatasetAdvancedSettings
          disabled={!advancedSettingsActive}
          axisOptions={
            views && views.data && views.data.length > 0
              ? Object.keys(views.data[0])
              : []
          }
          hasAxis={hasAxis}
          allKeys={
            views && views.data && views.data.length > 0
              ? Object.keys(views.data[0])
              : []
          }
        />
      </div>
    </div>
  );
};

export default DatasetSettings;
