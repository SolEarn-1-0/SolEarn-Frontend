/** @format */

import React, { PureComponent } from "react";
import {
	LineChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
  Line,
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

export default function Chart(){


	
		return (
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<LineChart
						data={data}
						margin={{
							top: 10,
							right: 30,
							left: 0,
							bottom: 0,
						}}>
						<CartesianGrid horizontal="" vertical="" />
						<XAxis dataKey="name" tick={{ fill: "rgb(209, 209, 211)" }} />
						<YAxis tick={{ fill: "rgb(209, 209, 211)" }} />
						<Tooltip />
						<Line
							type="monotone"
							dataKey="price"
							stroke="#8884d8"
							dot={{
								fill: "rgb(209, 209, 211)",
								stroke: "",
								strokeWidth: 2,
								r: 5,
							}}
							activeDot={{ r: 8 }}
						/>
						{/* <Area
							type="monotone"
							dataKey="uv"
							stroke="#8884d8"
							fill="#8884d8"
						/> */}
					</LineChart>
				</ResponsiveContainer>
			</div>
		);

}

// strokeDasharray="3 3"