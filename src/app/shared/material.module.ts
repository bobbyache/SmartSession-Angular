
import { MatToolbarModule, MatSnackBarModule, MatCheckbox, MatCheckboxModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [

  ],
  imports: [
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    MatCheckboxModule
  ],
  exports: [
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    MatCheckboxModule
  ],
  providers: [
  ]
})
export class MaterialModule { }
