import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../shared/services/snackbar/snackbar.service';
import { OkCancelDialogComponent } from '../shared/dialogs/ok-cancel-dialog/ok-cancel-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dialog: MatDialog, private snackBar: SnackbarService) { }

  ngOnInit() {
  }

  notify() {
    this.snackBar.information('This is just here to show that the snackbar is working!');
  }
  confirm() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      description: 'Would you like to continue?',
      content: 'Would you like to continue?'
    };

    const dialogRef = this.dialog.open(OkCancelDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      response => {
        this.snackBar.information(`The response was ${response ? 'yes' : 'no'}`);
      }
    );
  }
}
