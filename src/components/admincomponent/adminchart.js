/** @format */

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		name: "January",
		price: 4000,
	},
	{
		name: "February",
		price: 6700,
	},
	{
		name: "March",
		price: 8000,
	},
	{
		name: "April",
		price: 19000,
	},
	{
		name: "May",
		price: 4000,
	},
	{
		name: "June",
		price: 4000,
	},
	{
		name: "July",
		price: 4000,
	},
];

export default function AdminChart() {
	return (
		<div className="adchart" style={{ width: "100%", height: 200 }}>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					width={500}
					height={400}
					data={data}
					margin={{
						top: 10,
						right: 30,
						left: 0,
						bottom: 0,
					}}>
					<Line
						type="monotone"
						dataKey="price"
						stroke="rgb(20, 116, 68)"
						// fill="rgb(25, 223, 139)"
						// dot={{
						// 	fill: "rgb(209, 209, 211)",
						// 	stroke: "",
						// 	strokeWidth: 1,
						// 	// r: 5,
						// }}
						// activeDot={{ r: 8 }}
					/>
					<CartesianGrid horizontal="" vertical="" />
					<XAxis
						dataKey="name"
						tick={{ fill: "rgb(209, 209, 211)" }}
						style={{ fontSize: "13px" }}
					/>
					<YAxis
						tick={{ fill: "rgb(209, 209, 211)" }}
						style={{ fontSize: "13px" }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
