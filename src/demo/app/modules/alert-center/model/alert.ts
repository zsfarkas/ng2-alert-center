import {AlertType} from './alert-type';

export class Alert {
  constructor(public alertType: AlertType, public text: string, public textStrong: string = '', public dismissTime = 0) {
  }

  isDismissable() {
    return this.dismissTime <= 0;
  }

  isAutoDismissing() {
    return this.dismissTime > 0;
  }
}
