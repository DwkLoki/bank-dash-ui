"use client"

import ReactECharts from "echarts-for-react";

const MonthlyExpenseChart = () => {
    const option = {
        grid: { left: 0, right: 0, top: 0, bottom: 0, containLabel: true },
        xAxis: {
            type: "category",
            data: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: { color: "#718EBF" }
        },
        yAxis: {
            type: "value",
            show: false,
            axisLabel: { show: false },
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
            offset: -9999 // trik untuk dorong axis keluar canvas
        },
        series: [
            {
                type: "bar",
                data: [6800, 13500, 7000, 3100, 12500, 6200],
                itemStyle: {
                    borderRadius: [9, 9, 9, 9],
                    color: (params) => (params.dataIndex === 4 ? "#16DBCC" : "#E5EBF0") // highlight Dec
                },
                barWidth: 30,
                label: {
                    show: true,
                    position: "top",
                    formatter: (params) =>
                        params.dataIndex === 4 ? `$${params.value.toLocaleString()}` : "",
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#1E255E"
                }
            }
        ]
    };

    return (
        <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
    );
};

export default MonthlyExpenseChart;