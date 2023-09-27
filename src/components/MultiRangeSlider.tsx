import { useViews } from "@/hooks/useViews";
import { useState, useEffect } from "react";
import { Range, getTrackBackground } from "react-range";

interface MultiRangeSliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  disabled?: boolean;
}

const MultiRangeSlider = ({
  min,
  max,
  value,
  onChange,
  disabled,
}: MultiRangeSliderProps) => {
  const { views } = useViews();
  const [values, setValues] = useState(value);

  useEffect(() => {
    setValues(value);
  }, [value]);

  return (
    <>
      <Range
        disabled={disabled}
        step={1}
        min={min}
        max={max}
        values={values}
        onChange={(values) => {
          setValues([values[0], values[1]]);
          onChange(values as [number, number]);
        }}
        renderTrack={({ props, children }) => (
          <div
            role="row"
            tabIndex={0}
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              backgroundColor: "#EFEFEF",
              borderRadius: "5px",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "8px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: [
                    "#EFEFEF",
                    disabled ? "#BABABA" : "#152A1E",
                    "#EFEFEF",
                  ],
                  min: min,
                  max: max,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              backgroundColor: isDragged
                ? "#152A1E"
                : disabled
                ? "#888888"
                : "#3A8C5E",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              outline: "none",
            }}
          />
        )}
      />
      <div className="flex justify-between text-sm">
        <div>
          Min:{" "}
          {views?.current?.rangeX &&
            views.current.xAxis &&
            views?.data?.[views.current.rangeX?.[0]][views.current.xAxis]}
        </div>
        <div>
          Max:{" "}
          {views?.current?.rangeX &&
            views.current.xAxis &&
            views?.data?.[views.current.rangeX?.[1]][views.current.xAxis]}
        </div>
      </div>
    </>
  );
};

export default MultiRangeSlider;
