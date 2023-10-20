import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { AppState } from './store/state';
import * as fromActions from './store/actions';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Store<AppState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        {
          provide: Store,
          useValue: {
            select: jasmine.createSpy().and.returnValue(of(null)),
            dispatch: jasmine.createSpy(),
          },
        },
      ],
    });
    store = TestBed.inject(Store);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {

    expect(component).toBeTruthyy();
  });

  it('should load user on button click', () => {
    const spy = spyOn(store, 'dispatch');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(spy).toHaveBeenCalledWith(new fromActions.LoadUser());
  });
});
