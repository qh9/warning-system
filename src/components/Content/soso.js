import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
export default class Zheng extends Component {
    componentDidMount() {
        am4core.useTheme(am4themes_animated);
        let chart = am4core.create("soso", am4charts.XYChart);
        chart.data = [{
            "name": "John",
            "points": 35654,
            "color": chart.colors.next(),
        }, {
            "name": "Damon",
            "points": 65456,
            "color": chart.colors.next(),
        }, {
            "name": "Patrick",
            "points": 45724,
            "color": chart.colors.next(),
        }, {
            "name": "Mark",
            "points": 13654,
            "color": chart.colors.next(),
        }];

        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "name";
        categoryAxis.renderer.grid.template.disabled = true;
        categoryAxis.renderer.minGridDistance = 30;
        categoryAxis.renderer.inside = true;
        categoryAxis.renderer.labels.template.fill = am4core.color("#fff");
        categoryAxis.renderer.labels.template.fontSize = 20;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.grid.template.strokeDasharray = "4,4";
        valueAxis.renderer.labels.template.disabled = true;
        valueAxis.min = 0;

        // Do not crop bullets
        chart.maskBullets = false;

        // Remove padding
        chart.paddingBottom = 0;

        // Create series
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "points";
        series.dataFields.categoryX = "name";
        series.columns.template.propertyFields.fill = "color";
        series.columns.template.propertyFields.stroke = "color";
        series.columns.template.column.cornerRadiusTopLeft = 15;
        series.columns.template.column.cornerRadiusTopRight = 15;
        series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/b]";

        // Add bullets
        let bullet = series.bullets.push(new am4charts.Bullet());
        let image = bullet.createChild(am4core.Image);
        image.horizontalCenter = "middle";
        image.verticalCenter = "bottom";
        image.dy = 20;
        image.y = am4core.percent(100);
        image.tooltipText = series.columns.template.tooltipText;
        image.propertyFields.fill = "color";
        image.filters.push(new am4core.DropShadowFilter());

    }
    render() {
        return (
            <div id="soso" style={{ width: 130, height: 150, background: '#fff' }}></div>

        )
    }
}
