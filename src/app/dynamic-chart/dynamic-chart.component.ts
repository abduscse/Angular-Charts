import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-chart',
  templateUrl: './dynamic-chart.component.html',
  styleUrls: ['./dynamic-chart.component.scss']
})
export class DynamicChartComponent implements OnInit {

  // lineChart
  public lineChartData: Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType: String = 'line';
  public pieChartType: String = 'pie';

  // Pie
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];

  constructor() { }

  ngOnInit() {
    console.log(this.lineChartData);

  }
  // public randomizeType(): void {
  //   this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
  //   this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  // }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  public randomizeType1(): void {
    console.log(this.lineChartData);
    const _lineChartData = [];
    for (let i = 0; i < this.lineChartData.length; i++) {
      const data = [];
      for (let j = 0; j < this.lineChartData[i].length; j++) {
        data.push(Math.round(Math.random() * 100));
      }
      _lineChartData.push(data);
    }
    this.lineChartData = JSON.parse(JSON.stringify(_lineChartData));
    console.log(this.lineChartData);
    console.log(_lineChartData);
  }

  public randomizeType2(): void {
    const data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];
    let clone = JSON.parse(JSON.stringify(this.pieChartData));
    clone = data;
    this.pieChartData = clone;
  }

  public flipType1(): void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
  }
  public flipType2(): void {
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }
}
