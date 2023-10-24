import { TestBed } from '@angular/core/testing';
import { SettingsService } from './settings.service';
import { SettingsApi } from "../api/settings.api";
import { LanguageApi } from "../api/language.api";
import { of, skip } from "rxjs";
import { Settings } from "../interfaces/settings";

const MOCK_THEME = 'light';
const MOCK_LANGUAGE = 'en';

class MockSettingsApi {
  getSettings() {
    return of({
      theme: 'light',
      language: 'en',
    });
  }
}

class MockLanguageApi {
  getLanguage() {
    return of({
      lang_code: 'en',
    });
  }
}

describe('SettingsService', () => {
  let service: SettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SettingsService,
        { provide: SettingsApi, useClass: MockSettingsApi },
        { provide: LanguageApi, useClass: MockLanguageApi },
      ],
    });
    service = TestBed.inject(SettingsService);
  });

  it('should be created', (done) => {
    expect(service).toBeTruthy();
    done();
  });

  it('getSettings() should return theme settings', () => {
    service.loadSettings().pipe(
      skip(1)
    )
      .subscribe((settings: Settings) => {
        expect(settings.theme).toEqual(MOCK_THEME);
      });
  });

  it('getSettings() should return language settings', () => {
    service.loadSettings().pipe(
      skip(1)
    )
      .subscribe((settings: Settings) => {
        expect(settings.language).toEqual(MOCK_LANGUAGE);
      });
  });
});
