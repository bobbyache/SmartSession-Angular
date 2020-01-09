
import { MatToolbarModule, MatSnackBarModule, MatCheckboxModule, MatSidenavModule, MatDialogModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgModule } from '@angular/core';
import { OkCancelDialogComponent } from './dialogs/ok-cancel-dialog/ok-cancel-dialog.component';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatDialogModule,
    MatListModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [
    MatToolbarModule,
    MatDialogModule,
    MatListModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [
  ]
})
export class MaterialModule { }
