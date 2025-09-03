import ReactECharts from "echarts-for-react";

const ExpensePieChart = () => {
    const option = {
        tooltip: {
            trigger: "item",
            formatter: "{b} <br/> {d}%",
        },
        series: [
            {
                type: "pie",
                radius: "80%",
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: "inner",
                    formatter: "{d}%\n{b}",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#fff",
                    textBorderColor: '#232323',
                    textBorderWidth: 1,
                    textBorderType: "solid",
                },
                labelLayout: {
                    hideOverlap: false,
                    moveOverlap: 'shiftY',
                },
                selectedMode: "single",
                selectedOffset: 8,
                itemStyle: {
                    borderColor: "#fff",
                    borderWidth: 5,
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 16,
                        fontWeight: "bold",
                    },
                },
                data: [
                    { value: 30, name: "Entertainment", itemStyle: { color: "#2E336A" }, selected: true },
                    { value: 20, name: "Others", itemStyle: { color: "#1624FF" } },
                    { value: 15, name: "Bill Expense", itemStyle: { color: "#FF7C1D" } },
                    { value: 35, name: "Investment", itemStyle: { color: "#FF3DE2" } },
                ],
            },
        ],
    };

    return (
        // <ReactECharts option={option} style={{ height: "300px", width: "100%" }} />
        <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
    );
};

export default ExpensePieChart;