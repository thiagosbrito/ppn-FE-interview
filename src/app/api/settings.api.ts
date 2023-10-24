import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import { SettingsResponse } from "../interfaces/settings-response";

@Injectable({
  providedIn: 'root'
})
export class SettingsApi {
  private readonly USER_SETTINGS_API: string = 'settings_url';

  constructor(
    private http_client: HttpClient,
  ) {
  }

  getSettings(): Observable<SettingsResponse> {
    return this.http_client.get<SettingsResponse>(this.USER_SETTINGS_API).pipe(
      catchError((error) => {
        console.error('Error occurred when loading user settings.')
        return throwError(error);
      }),
    );
  }
}
