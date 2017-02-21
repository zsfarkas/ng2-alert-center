import {InfoType} from "./info-type";

export class Alert {
  constructor(public info: string, public details: string = '', infoType: InfoType = InfoType.INFO) {
  }
}
