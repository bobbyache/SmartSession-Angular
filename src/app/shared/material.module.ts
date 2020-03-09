
import {
  MatFormFieldModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatDialogModule,
  MatInputModule
} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    MatInputModule,
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
    MatFormFieldModule,
    MatInputModule,
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
