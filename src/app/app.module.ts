import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { settingsReducer, userListReducer, userReducer } from './store/reducer';
import { UserEffects } from './store/effects';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from "./services/user.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      user: userReducer,
      userList: userListReducer,
      userSettings: settingsReducer
    }),
    EffectsModule.forRoot([UserEffects]),
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
