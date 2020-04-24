import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-time-progress-area-graph',
  templateUrl: './time-progress-area-graph.component.html',
  styleUrls: ['./time-progress-area-graph.component.scss']
})
export class TimeProgressAreaGraphComponent implements OnInit, AfterViewInit {

  @ViewChild('graph', { static: true }) graph: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.graph);
    const context = this.graph.nativeElement.getContext('2d');

  }

}
