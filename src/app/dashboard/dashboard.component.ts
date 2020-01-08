import { Component, OnInit } from '@angular/core';
import { CoreInfrastructureService } from '../shared/services/core-infrastructure.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private core: CoreInfrastructureService) { }

  ngOnInit() {
  }

  notify() {
    this.core.informationSnackbar('This is just here to show that the snackbar is working!');
  }

}
