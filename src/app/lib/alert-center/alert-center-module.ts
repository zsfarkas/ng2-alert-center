import {NgModule} from '@angular/core';
import {AlertCenterService} from './service/alert-center.service';
import {InfocenterComponent} from './infocenter/infocenter.component';
import {InfoComponent} from './info/info.component';

@NgModule({
  declarations: [InfocenterComponent, InfoComponent],
  providers: [AlertCenterService],
  imports: [InfocenterComponent]
})
export class InfocenterModule {
}
