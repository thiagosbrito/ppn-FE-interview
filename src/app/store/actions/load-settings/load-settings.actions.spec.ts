import * as FromSettingsActions from './load-settings.actions';

describe('Settings Actions', () => {
  it('should create an action to load settings', () => {
    const action = new FromSettingsActions.LoadSettings();
    expect(action.type).toEqual(FromSettingsActions.SettingsActionTypes.LOAD_SETTINGS);
  });
});
