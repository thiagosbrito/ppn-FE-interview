import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { LanguageResponse } from "../interfaces/language-response";

@Injectable({
  providedIn: 'root'
})
export class LanguageApi {
  private readonly USER_LANGUAGE_API: string = 'language_url';

  constructor(
    private http_client: HttpClient
  ) {
  }

  getLanguage(): Observable<LanguageResponse> {
    return this.http_client.get<LanguageResponse>(this.USER_LANGUAGE_API).pipe(
      catchError((error) => {
        console.error('Error occurred when loading user language.');
        return throwError(error);
      }),
    );
  }
}
