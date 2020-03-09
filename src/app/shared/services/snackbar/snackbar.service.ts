import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { SnackBarSettings } from './snackbar-settings';

@Injectable()
export class SnackbarService {

    constructor(private snackBar: MatSnackBar) {
    }

    information(message: string) {
        this.snackBar.open(
            message,
            'x',
            SnackBarSettings.defaultConfig()
        );
    }

    action(message: string) {
        this.snackBar.open(
            message,
            'x',
            SnackBarSettings.actionConfig()
        );
    }

    error(message: string) {
        this.snackBar.open(
            message ? message : SnackBarSettings.defaultErrorMessage(),
            'x',
            SnackBarSettings.errorConfig()
        );
    }
}
