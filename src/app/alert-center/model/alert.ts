import {AlertType} from './alert-type';

export class Alert {
  constructor(public alertType: AlertType, public text: string, public textStrong: string = '') {
  }
}
