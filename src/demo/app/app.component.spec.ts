import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AlertGeneratorComponent} from './alert-generator/alert-generator.component';
import {By} from '@angular/platform-browser';
import {AlertCenterModule} from '../../alert-center/dist/alert-center.module';
import {FormsModule} from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, AlertGeneratorComponent
      ],
      imports: [AlertCenterModule, FormsModule]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement;
    expect(compiled.query(By.directive(AlertGeneratorComponent))).toBeTruthy();
  }));
});
