"use client"

import ReactECharts from "echarts-for-react"

const WeeklyActivityChart = () => {
    const option = {
        grid: {
            top: 60,
            left: 40,
            right: 20,
            bottom: 20,
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' }
        },
        legend: {
            data: ["Deposit", "Withdraw"],
            icon: "circle",
            top: 0,
            right: 0,
            textStyle: {
                color: "#718EBF"
            }
        },
        xAxis: {
            type: 'category',
            data: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
                color: "#718EBF"
            }
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: "#F1F1F5"
                }
            },
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
                color: "#718EBF"
            }
        },
        series: [
            {
                name: 'Withdraw',
                data: [490, 350, 320, 490, 180, 400, 400],
                type: 'bar',
                barWidth: 15,
                // barGap: 10,
                // barCategoryGap: '30%',
                itemStyle: {
                    color: "#1814F3",
                    borderRadius: [7, 7, 7, 7],
                }
            },
            {
                name: 'Deposit',
                data: [220, 120, 280, 380, 270, 270, 370],
                type: 'bar',
                barWidth: 15,
                barGap: 1,
                // barCategoryGap: '30%',
                itemStyle: {
                    color: "#16DBCC",
                    borderRadius: [7, 7, 7, 7],
                }
            }
        ],
    };

    return (
        <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
    )
}

export default WeeklyActivityChart