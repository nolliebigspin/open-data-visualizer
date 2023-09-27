import { COLORS } from "@/constants";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

type PieChartViewProps = {
  data: any;
  width: number;
  height: number;
  radius: number;
  cx: number;
  cy: number;
  dataKeys?: string[];
  className?: string;
};

const PieChartView = ({
  data,
  width,
  height,
  radius,
  cx,
  cy,
  dataKeys,
  className,
}: PieChartViewProps) => {
  const pieChartData = Object.keys(data)
    .filter((key) => dataKeys?.includes(key))
    .map((key) => ({ name: key, value: parseInt(data[key]) }));

  return (
    <div className={`${className}`}>
      <PieChart width={width} height={height}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={pieChartData}
          cx={cx}
          cy={cy}
          outerRadius={radius}
          fill="#8884d8"
          label
        >
          {pieChartData.map((_entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartView;
