import React, { useLayoutEffect } from 'react';
// amchart4

/* Imports */
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end
interface ITempChart {
  t_list: number[];
  ts_list: number[];
}

function TempChart({ t_list, ts_list }: ITempChart) {
  useLayoutEffect(() => {
    // Create chart instance
    let chart = am4core.create('chartdiv', am4charts.XYChart);
    let tmpData = [];
    for (var i = 0; i < t_list.length; i++) {
      let row = {
        date: new Date(ts_list[i]*1000),
        value1: t_list[i],
      };
      tmpData.push(row);
    }
    
    // Add data
    chart.data = tmpData;
  
    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = 'value1';
    series.dataFields.dateX = 'date';
    series.strokeWidth = 2;
    series.minBulletDistance = 10;
    series.tooltipText =
      '[bold]{date.formatDate()}:[/] {value1}\n[bold]{previousDate.formatDate()}:[/] {value2}';
    // series.tooltip.pointerOrientation = 'vertical';

    // Create series
    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = 'value2';
    series2.dataFields.dateX = 'date';
    series2.strokeWidth = 2;
    series2.strokeDasharray = '3,4';
    series2.stroke = series.stroke;

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;

    // chart.stroke = am4core.color('white');

    return () => chart.dispose();
  }, [t_list]);

  return (
    <>
      <div
        id="chartdiv"
        style={{
          height: '30vh',
        }}
      ></div>
    </>
  );
}
export default TempChart;
