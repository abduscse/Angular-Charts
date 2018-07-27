import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polar-area-chart',
  templateUrl: './polar-area-chart.component.html',
  styleUrls: ['./polar-area-chart.component.scss']
})
export class PolarAreaChartComponent implements OnInit {

  public polarAreaChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
  public polarAreaLegend: Boolean = true;
  public polarAreaChartType: String = 'polarArea';
  public options = {
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 10,
        bottom: 10
      }
    },
    legend: {
      position: 'left'
    }
  };

  constructor() { }

  ngOnInit() {
  }
  // PolarArea
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
