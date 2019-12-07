import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiRequestInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modifiedUrl = `${environment.api.baseUrl.toString()}${req.url}`;

        req = req.clone({
            url: modifiedUrl,

            // use this.core.httpHeaders(); if necessary can pass as an array?
            // setHeaders: {
            //     'XD-API-KEY': environment..apiKeyValue,
            //     'Cache-Control': 'no-cache',
            //     Pragma: 'no-cache'
            // }
        });

        return next.handle(req);
    }
}
