'use client'

import ReactECharts from 'echarts-for-react';

export default function BalanceHistoryChart() {
    const option = {
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            type: 'category',
            data: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
            boundaryGap: false,
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#E6EFF5',
                    type: 'dashed',
                },
            },
            axisLabel: {
                color: '#718EBF',
            },
        },
        yAxis: {
            type: 'value',
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#E6EFF5',
                    type: 'dashed',
                },
            },
            axisLabel: {
                color: '#718EBF',
            },
        },
        series: [
            {
                data: [300, 200, 450, 780, 200, 560, 200],
                type: 'line',
                smooth: true,
                showSymbol: false,
                lineStyle: {
                    color: '#2D60FF',
                    width: 3,
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            { offset: 0, color: 'rgba(45, 96, 255, 0.3)' },
                            { offset: 1, color: 'rgba(45, 96, 255, 0)' },
                        ],
                    },
                },
            },
        ],
        grid: {
            top: 20,
            left: 40,
            right: 20,
            bottom: 20,
        },
    };

    return (
        <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
    );
}