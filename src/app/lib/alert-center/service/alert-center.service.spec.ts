import {TestBed, inject} from '@angular/core/testing';
import {AlertCenterService} from './alert-center.service';
import {Alert} from '../model/alert';
import {AlertType} from '../model/alert-type';

describe('AlertCenterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertCenterService]
    });
  });

  it('should be able to inject', inject([AlertCenterService], (service: AlertCenterService) => {
    expect(service).toBeTruthy();
  }));

  it('should emit an event if it retrieves an alert object', inject([AlertCenterService], (service: AlertCenterService) => {
    const TEST_ALERT = new Alert(AlertType.DANGER, 'TEST_STRONG', 'TEST_DETAILS');
    const SPY = jasmine.createSpy('spy', () => {
    });

    service.alerts.subscribe(SPY);

    service.alert(TEST_ALERT);

    expect(SPY).toHaveBeenCalledTimes(1);
    expect(SPY).toHaveBeenCalledWith(TEST_ALERT);
  }));
});
