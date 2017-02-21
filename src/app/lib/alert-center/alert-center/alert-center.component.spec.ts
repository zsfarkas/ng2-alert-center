import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AlertCenterComponent} from './alert-center.component';
import {CommonModule} from '@angular/common';
import {AlertComponent} from '../alert/alert.component';
import {AlertCenterService} from '../service/alert-center.service';

describe('AlertCenterComponent', () => {
  let component: AlertCenterComponent;
  let fixture: ComponentFixture<AlertCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlertCenterComponent, AlertComponent],
      imports: [CommonModule],
      providers: [AlertCenterService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
