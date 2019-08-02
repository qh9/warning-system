import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
export default class Gan extends Component {
    componentDidMount() {
        am4core.useTheme(am4themes_animated);
        let chart = am4core.create("gan", am4charts.PieChart3D);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
        chart.legend = new am4charts.Legend();
        chart.data = [
            {
                country: "Lithuania",
                litres: 501.9
            },
            {
                country: "Czech Republic",
                litres: 301.9
            },
            {
                country: "Ireland",
                litres: 201.1
            },
            {
                country: "Germany",
                litres: 165.8
            },
            {
                country: "Australia",
                litres: 139.9
            },
            {
                country: "Austria",
                litres: 128.3
            },
            {
                country: "UK",
                litres: 99
            },
            {
                country: "Belgium",
                litres: 60
            },
            {
                country: "The Netherlands",
                litres: 50
            }
        ];

        let series = chart.series.push(new am4charts.PieSeries3D());
        series.dataFields.value = "litres";
        series.dataFields.category = "country";

    }
    render() {
        return (
            <div id="gan" style={{ width: 500, height: 500, background: '#fff' }}></div>

        )
    }
}
