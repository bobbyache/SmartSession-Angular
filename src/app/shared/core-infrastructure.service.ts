import { Injectable } from '@angular/core';
import { SnackbarService } from './snackbar.service';
import { ApplicationSettingsService } from './application-settings.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class CoreInfrastructureService {

    constructor(private applicationSettings: ApplicationSettingsService, private snackbarService: SnackbarService) {}

    get applicationName(): string {
        return this.applicationSettings.applicationName;
    }

    get version(): string {
        return this.applicationSettings.version;
    }

    informationSnackbar(message: string) {
        return this.snackbarService.information(message);
    }

    actionSnackbar(message: string) {
        return this.snackbarService.action(message);
    }

    errorSnackbar(message: string) {
        return this.snackbarService.error(message);
    }

    httpHeaders(): HttpHeaders {
        return this.applicationSettings.getHeaders();
    }

    baseUrl(): string {
        return this.applicationSettings.getBaseUrl();
    }
}
