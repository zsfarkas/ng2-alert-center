import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {AlertCenterComponent} from './alert-center.component';
import {CommonModule} from '@angular/common';
import {AlertComponent} from '../alert/alert.component';
import {AlertCenterService} from '../service/alert-center.service';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AlertType} from '../model/alert-type';
import {Alert} from '../model/alert';


describe('AlertCenterComponent', () => {
  let component: AlertCenterComponent;
  let fixture: ComponentFixture<AlertCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlertCenterComponent, AlertComponent],
      imports: [CommonModule, NoopAnimationsModule],
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

  it('should display new alert, sent via alert service', inject([AlertCenterService], (alertCenterService: AlertCenterService) => {
    const TEST_ALERT = Alert.create(AlertType.INFO, 'TEST');
    alertCenterService.alert(TEST_ALERT);

    fixture.detectChanges();

    expect(component.getAlerts()[0]).toBe(TEST_ALERT);
  }));

  it('should remove alert from alert list', inject([AlertCenterService], (alertCenterService: AlertCenterService) => {
    const TEST_ALERT = Alert.create(AlertType.INFO, 'TEST');
    alertCenterService.alert(TEST_ALERT);

    fixture.detectChanges();

    expect(component.getAlerts()[0]).toBe(TEST_ALERT);

    component.remove(TEST_ALERT);

    fixture.detectChanges();

    expect(component.getAlerts().length).toBe(0);
  }));

  it('should not fail by removing unknown alert', () => {
    const TEST_ALERT = Alert.create(AlertType.INFO, 'TEST');

    component.remove(TEST_ALERT);

    expect(true).toBe(true, 'this code should be reached');
  });
});
