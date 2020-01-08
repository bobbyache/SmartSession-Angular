import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApplicationSettingsService {
    private readonly baseUrl = environment.api.baseUrl;
    private headers = new HttpHeaders();

    constructor() {}

    get applicationName(): string {
        return environment.appName;
    }

    get version(): string {
        return environment.version;
    }

    getHeaders(): HttpHeaders {
        return this.headers
            // .set('Cache-Control', 'no-cache')
            // .set('Pragma', 'no-cache')
        ;
    }

    getBaseUrl(): string {
        return this.baseUrl;
    }
}
