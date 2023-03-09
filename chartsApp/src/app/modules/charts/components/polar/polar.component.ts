import { Component, OnInit } from '@angular/core';
import type { EChartsOption } from 'echarts';
import { NgxEchartsModule, NGX_ECHARTS_CONFIG } from 'ngx-echarts';
import { CoolTheme } from '../../charts-theme';

@Component({
  selector: 'chart-polar',
  templateUrl: './polar.component.html',
  styleUrls: ['./polar.component.scss'],
  standalone: true,
  imports: [NgxEchartsModule],
  providers: [
    {
      provide: NGX_ECHARTS_CONFIG,
      useFactory: () => ({ echarts: () => import('echarts') }),
    },
  ],
})
export class PolarComponent implements OnInit {
  data: number[][] = [];

  coolTheme = CoolTheme;
  options: EChartsOption = {
    title: {
      text: 'Two Value-Axes in Polar',
    },
    legend: {
      data: ['line'],
    },
    polar: {
      center: ['50%', '54%'],
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    angleAxis: {
      type: 'value',
      startAngle: 0,
    },
    radiusAxis: {
      min: 0,
    },
    series: [
      {
        coordinateSystem: 'polar',
        name: 'line',
        type: 'line',
        showSymbol: false,
        data: this.data,
      },
    ],
    animationDuration: 5000,
  };
  ngOnInit(): void {
    for (let i = 0; i <= 360; i++) {
      let t = (i / 180) * Math.PI;
      let r = Math.sin(2 * t) * Math.cos(2 * t);
      this.data.push([r, i]);
    }
  }
}
