import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ok-cancel-dialog',
  templateUrl: './ok-cancel-dialog.component.html',
  styleUrls: ['./ok-cancel-dialog.component.scss']
})
export class OkCancelDialogComponent implements OnInit {

  description: string;
  content: string;

  constructor(
    private dialogRef: MatDialogRef<OkCancelDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
      this.description  = data.description;
      this.content = data.content;
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  yes() {
    this.dialogRef.close(true);
  }

  no() {
      this.dialogRef.close(false);
  }

}
