import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../shared/services/snackbar/snackbar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private snackBar: SnackbarService) { }

  ngOnInit() {
  }

  notify() {
    this.snackBar.information('This is just here to show that the snackbar is working!');
  }

}
