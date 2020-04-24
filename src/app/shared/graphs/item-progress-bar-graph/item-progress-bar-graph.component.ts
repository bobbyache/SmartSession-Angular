import { Component } from '@angular/core';
import { multi } from './data';

@Component({
  selector: 'app-item-progress-bar-graph',
  templateUrl: './item-progress-bar-graph.component.html',
  styleUrls: ['./item-progress-bar-graph.component.scss']
})
export class ItemProgressBarGraphComponent {

  multi: any[];
  view: any[] = [700, 300];

  // options
  legend = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    Object.assign(this, { multi });
  }

  onSelect(event) {
    console.log(event);
  }

}
