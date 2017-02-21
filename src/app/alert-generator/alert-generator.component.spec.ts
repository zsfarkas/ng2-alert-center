import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertGeneratorComponent } from './alert-generator.component';
import {AlertCenterModule} from '../lib/alert-center/alert-center-module';
import {FormsModule} from '@angular/forms';

describe('AlertGeneratorComponent', () => {
  let component: AlertGeneratorComponent;
  let fixture: ComponentFixture<AlertGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertGeneratorComponent ],
      imports: [AlertCenterModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
