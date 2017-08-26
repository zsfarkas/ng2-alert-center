export default {
  input: 'index.js',
  sourceMap: false,
  output: {
    format: 'umd',
    file: 'index.umd.js'
  },
  name: 'ng.alert.center',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/animations': 'ng.animations',
    '@angular/common': 'ng.common',
    '@angular/platform-browser/animations': 'ng.platform.browser.animations',
    'rxjs/Observable': 'Rx',
    'rxjs/Subject': 'Rx',
    'rxjs/ReplaySubject': 'Rx',
    'rxjs/add/operator/map': 'Rx.Observable.prototype',
    'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
    'rxjs/add/observable/fromEvent': 'Rx.Observable',
    'rxjs/add/observable/of': 'Rx.Observable'
  }
}
