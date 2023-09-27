import { COLORS } from "@/constants";
import { TickFormatter } from "@/types";
import { formatDateStringToTime } from "@/utils";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from "recharts";

type LineChartViewProps = {
  data: any;
  width: number;
  height: number;
  xAxis?: string;
  dataKeys?: string[];
  className?: string;
  tickFormatter?: TickFormatter;
};

const LineChartView = ({
  data,
  width,
  height,
  xAxis,
  dataKeys,
  className,
  tickFormatter,
}: LineChartViewProps) => {
  const evalTickformater = (formatterName?: TickFormatter) => {
    switch (formatterName) {
      case "dateTime":
        return formatDateStringToTime;
      default:
        return undefined;
    }
  };
  return (
    <div className={`${className}`}>
      <LineChart width={width} height={height} data={data}>
        <XAxis
          dataKey={xAxis}
          tickFormatter={evalTickformater(tickFormatter)}
        />

        <YAxis />
        <CartesianGrid stroke="#AAAAAA" strokeDasharray="2 8" />
        <Tooltip />
        <Legend />
        {dataKeys &&
          dataKeys.map((key, index) => (
            <Line
              type="monotone"
              dataKey={key}
              key={index}
              stroke={COLORS[index % COLORS.length]}
              strokeWidth={2}
            />
          ))}
      </LineChart>
    </div>
  );
};

export default LineChartView;
