import { Injectable } from '@angular/core';
import { Settings } from '../interfaces/settings';
import { combineLatest, Observable, startWith } from 'rxjs';
import { map } from 'rxjs/operators';
import { SettingsApi } from "../api/settings.api";
import { LanguageApi } from "../api/language.api";
import { SettingsResponse } from "../interfaces/settings-response";
import { LanguageResponse } from "../interfaces/language-response";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(
    private settingsApi: SettingsApi,
    private languageApi: LanguageApi,
  ) {
  }

  loadSettings(): Observable<Settings> {
    return combineLatest({
      theme: this.settingsApi.getSettings().pipe(
        startWith({} as SettingsResponse),
        map((settings: SettingsResponse) => settings?.theme),
      ),
      language: this.languageApi.getLanguage().pipe(
        startWith({} as LanguageResponse),
        map((language: LanguageResponse) => language?.lang_code),
      ),
    });
  }
}
