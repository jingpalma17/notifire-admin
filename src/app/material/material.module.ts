import { NgModule } from '@angular/core';
import {
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';

/**
 * Use this module to import all Angular Material related modules.
 * Reference: https://material.angular.io
 */
@NgModule({
  imports: [
    MatSnackBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    MatDividerModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTooltipModule
  ],
  exports: [
    MatSnackBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    MatDividerModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTooltipModule
  ]
})
export class MaterialModule {}
