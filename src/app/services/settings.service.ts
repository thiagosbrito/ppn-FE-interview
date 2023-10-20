import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Settings } from '../interfaces/settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public readonly USER_SETTINGS_API: string = 'settings_url';
  public readonly USER_LANGUAGE_API: string = 'language_url';
  public user_settings: Settings;

  constructor(
    private http_client: HttpClient
  ) {

    this.user_settings = {
      theme: 'default',
      language: 'EN'
    };
  }

  getSettings() {
    return this.http_client.get(this.USER_SETTINGS_API)
      .subscribe({
        next: (settings: any) => {
          if (settings && settings.theme) {
            this.user_settings.theme = settings.theme;
          }

          return this.http_client.get(this.USER_LANGUAGE_API)
            .subscribe({
              next: (language: any) => {
                if (language && language.lang_code) {
                  this.user_settings.language = language.lang_code;
                }
              },
              error: () => {
                console.error('Error occurred when loading user language.')
              }
            })
        },
        error: () => {
          console.error('Error occurred when loading user settings.')
        }
      });
  }
}
