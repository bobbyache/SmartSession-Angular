import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-item-progress-bar-graph',
  templateUrl: './item-progress-bar-graph.component.html',
  styleUrls: ['./item-progress-bar-graph.component.scss']
})
export class ItemProgressBarGraphComponent implements OnInit, AfterViewInit {

  @ViewChild('graph', { static: true }) graph: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.graph);
    const context = this.graph.nativeElement.getContext('2d');

  }

}
