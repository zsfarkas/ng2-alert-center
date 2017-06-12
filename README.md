# ng2-alert-center

Alert center provides an alert service and an alert component, you can include in your Angular 2 project.

Currently it uses bootstrap 3 for styling. If you don't use bootstrap, you can just use the bootstrap classes to apply your own styles.

## Status

[![Build Status](https://travis-ci.org/zsfarkas/ng2-alert-center.svg?branch=master)](https://travis-ci.org/zsfarkas/ng2-alert-center)

[![NPM](https://nodei.co/npm/ng2-alert-center.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/ng2-alert-center)
[![NPM](https://nodei.co/npm-dl/ng2-alert-center.png?height=3&months=6)](https://npmjs.org/ng2-alert-center)

## Install

`npm install ng2-alert-center --save`

## Usage

Hopefully, it is easy to understand by this example, how to use this module. Refer the API description for further information.    

```
@Component({
  template: `
    <!-- Insert the alert center component once in your body /-->
    <div class="my-alert-center-style>
      <nac-alert-center animation="'fancy'"></nac-alert-center>
    </div>
  `
})
export MyComponent {
  /* Inject the alert service into your component. */
  constructor(private service: AlertCenterService) { }
  
  /* Call this method to send an alert. */
  sendAnAlert() {
    const alert = new Alert(AlertType.INFO, 'Test alert.');
    
    this.service.alert(alert);
  }
  
  /* Let the alert disappear by itself in 5 seconds */
  sendAnAutoDismissingAlert() {
    const alert = new Alert(AlertType.INFO, 'Auto dismissing test alert.', '', 5000);

    this.service.alert(alert);
  }
}
```

## Show case

You can test the module online:

* https://ng2-alert-center-demo.farkas.land

## Roadmap

Please consider, that this module is under development. Following features are coming:

* Links in alerts
* Support for i18n
* More tests

## API

### Component `<nac-alert-center>`

Use this component to define the place, where alerts appear in your application. You can use individual styles for the positioning.

#### Inputs:

`animation`: 

* it defines the enabled animation of appearing disappearing of alerts. 
* possible values: `'none'`, `'decent'`, `'fancy'`
* default: `'none'`

`htmlTextEnabled`:

* set it `true` to enable html in alert text.
* possible values: `true|false`
* default: `false`

### Injectable Service `AlertCenterService`

Inject this class in your components, which you want to send an alert from. 

#### Properties

`alerts: Observable<Alert>`

The component `<nac-alert-center>` will be informed via this observable, if an alert was sent.

#### Methods:

`alert (anAlert: Alert): void`

Informs the observing components about a new alert. 

### Model class `Alert`

Represents an alert, which will be displayed by the component `<nac-alert-center>`.

#### Properties:

`alertType: AlertType`

default: none

`text: string`

default: none

`textStrong: string`

default: `''`

`autoDismissTime: number`

default: `0`

`dismissable: boolean`

default: `true`

#### Methods:

`constructor (alertType: AlertType, text: string, textStrong = '', dismissType = 0)`
