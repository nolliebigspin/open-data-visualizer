import { useViews } from "@/hooks/useViews";
import { useState, useEffect } from "react";
import { Range, getTrackBackground } from "react-range";

interface SingleRangeSliderProps {
  min: number;
  max: number;
  startValue: number[];
  step: number;
  onChange: (value: number[]) => void;
  disabled?: boolean;
}

const SingleRangeSlider = ({
  min,
  max,
  startValue,
  step,
  onChange,
  disabled,
}: SingleRangeSliderProps) => {
  const { views } = useViews();
  const [values, setValues] = useState(startValue);
  return (
    <>
      <Range
        values={values}
        step={step}
        min={min}
        max={max}
        onChange={(values) => {
          setValues(values);
          onChange(values as number[]);
        }}
        renderTrack={({ props, children }) => (
          <div
            role="row"
            tabIndex={0}
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "8px",
                width: "100%",
                borderRadius: "4px",
                backgroundColor: "#EFEFEF",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            key={props.key}
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
      <div className="-translate-y-7 text-sm">
        Datum:{" "}
        {views?.current?.pieRow &&
          (views?.data?.[views.current.pieRow].datum
            ? views?.data?.[views.current.pieRow].datum
            : views?.data?.[views.current.pieRow].Jahr
            ? views?.data?.[views.current.pieRow].Jahr
            : views.current.pieRow)}
      </div>
    </>
  );
};

export default SingleRangeSlider;
