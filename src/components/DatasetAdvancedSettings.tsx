import { useViews } from "@/hooks/useViews";
import { Visualization } from "@/types";

type DatasetAdvancedSettingsProps = {
  axisOptions: string[];
  disabled?: boolean;
  hasAxis?: boolean;
  allKeys?: string[];
};

const DatasetAdvancedSettings = ({
  disabled = true,
  axisOptions,
  hasAxis,
  allKeys,
}: DatasetAdvancedSettingsProps) => {
  const { views } = useViews();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label className="text-sm font-bold" htmlFor="visualizationType">
          VISUALISIERUNG
        </label>
        <select
          id="visualizationType"
          className="p-2"
          value={views?.current?.visualizationType}
          disabled={disabled}
          onChange={(e) =>
            views?.setVisualizationType(e.target.value as Visualization)
          }
        >
          {Object.values(Visualization).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      {views?.visualizationType === Visualization.LINE && hasAxis && (
        <>
          <div className="flex flex-col">
            <label className="text-sm font-bold" htmlFor="xAxis">
              X-ACHSE
            </label>
            <select
              id="xAxis"
              className="p-2"
              value={views?.current?.xAxis}
              disabled={disabled}
              onChange={(e) =>
                views?.setCurrent({ ...views.current, xAxis: e.target.value })
              }
            >
              {axisOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </>
      )}
      {(views?.visualizationType === Visualization.PIE ||
        views?.visualizationType === Visualization.LINE) &&
        allKeys &&
        allKeys.length > 0 && (
          <div className="flex flex-col">
            <label htmlFor="columns_pie" className="text-sm font-bold">
              {views.visualizationType === Visualization.LINE
                ? "Y-ACHSE"
                : "SPALTEN"}
            </label>
            <ul>
              {allKeys.map((key, index) => (
                <li className="flex gap-2" key={index}>
                  <input
                    disabled={disabled}
                    type="checkbox"
                    id={`columns-pie-${index}`}
                    checked={views.current?.dataKeys?.includes(key)}
                    onChange={(e) =>
                      views.setCurrent(
                        e.target.checked
                          ? {
                              ...views.current,
                              dataKeys: [
                                ...(views.current?.dataKeys || []),
                                key,
                              ],
                            }
                          : {
                              ...views.current,
                              dataKeys: [
                                ...(views.current?.dataKeys?.filter(
                                  (item) => item !== key
                                ) || []),
                              ],
                            }
                      )
                    }
                    className="cursor-pointer accent-accent"
                  />
                  <label htmlFor={key} className="cursor-pointer">
                    {key}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        )}
      {views?.visualizationType === Visualization.MAP && (
        <div className="flex flex-col gap-2">
          <strong className="text-sm">HINWEIS</strong>
          <p>
            Datenpunkte werden nur auf der Karte angezeigt, wenn der Datensatz
            Koordinaten in Form von Längen- und Breitengraden enthält.
          </p>
        </div>
      )}
    </div>
  );
};

export default DatasetAdvancedSettings;
