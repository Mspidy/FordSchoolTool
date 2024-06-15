import { Component, OnInit } from '@angular/core';
import { curveLinear } from 'd3-shape';
import { Color, ScaleType } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lineChartData = [
    {
      name: 'Series 1',
      series: [
        { name: 'Jan', value: 100 },
        { name: 'Feb', value: 200 },
        { name: 'Mar', value: 150 },
        { name: 'Apr', value: 300 },
        { name: 'May', value: 180 },
        { name: 'Jun', value: 250 }
      ]
    },
    {
      name: 'Series 2',
      series: [
        { name: 'Jan', value: 100 },
        { name: 'Feb', value: 200 },
        { name: 'Mar', value: 150 },
        { name: 'Apr', value: 300 },
        { name: 'May', value: 180 },
        { name: 'Jun', value: 250 }
      ]
    }
  ];

  customCurve = curveLinear;
  view: [number, number] = [800, 400];

  areaChartData = [
    {
      name: 'Budget',
      series: [
        { name: '2010', value: 10000 },
        { name: '2011', value: 15000 },
        { name: '2012', value: 12000 },
        { name: '2013', value: 18000 },
        { name: '2014', value: 16000 },
        { name: '2015', value: 15000 },
        { name: '2016', value: 12000 },
        { name: '2017', value: 18000 },
        { name: '2018', value: 14000 },
        { name: '2019', value: 15000 },
        { name: '2020', value: 12000 },
        { name: '2021', value: 18000 },
        { name: '2022', value: 15000 },
        { name: '2023', value: 12000 },
        { name: '2024', value: 18000 },
        // Add more years and values as needed
      ]
    }
  ];

  views: [number, number] = [1700, 400]; // Viewport dimensions

  colorScheme: Color = {
    name: 'cool', // Specify a name for the color scheme
    selectable: true, // Whether the color scheme is selectable
    group: ScaleType.Ordinal, // Specify the ScaleType for ordinal data
    domain: ['#000080'] // Area color
  };

  //this is for pie chart

  single: any[] = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }
  ]; // Sample data for the chart

  // Customize colors for the chart
  colorSchemes: Color = {
    name: 'cool', // Specify a name for the color scheme
    selectable: true, // Whether the color scheme is selectable
    group: ScaleType.Ordinal, // Specify the ScaleType for ordinal data
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']// Area color
  };

  // Handle click events on the chart
 

  constructor() {
  }

  ngOnInit(): void {
  }

}
