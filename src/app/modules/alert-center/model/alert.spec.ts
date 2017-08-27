import {AlertType} from './alert-type';
import {Alert} from './alert';

describe('Alert', () => {
  it('should be dismissable, if no timeout defined', () => {
    const alert = Alert.create(AlertType.INFO, 'TEST', 0, false);

    expect(alert.isDismissable()).toBe(true);
  });

  it('should not be dismissable, if timeout defined', () => {
    const alert = Alert.create(AlertType.INFO, 'TEST', 5000, false);

    expect(alert.isDismissable()).toBe(false);
  });

  it('should be dismissable, if dismissable explicitly set to true', () => {
    const alert = Alert.create(AlertType.INFO, 'TEST', 5000, true);

    expect(alert.isDismissable()).toBe(true);
  });
});
