//https://medium.com/@cyrilletuzi/how-to-build-and-publish-an-angular-module-7ad19c0b4464
export default {
  entry: 'dist/src/index.js',
  dest: 'dist/bundles/sampleng2module.umd.js',
  sourceMap: true,
  format: 'umd',
  moduleName: 'SampleNg2Module',
  context: 'this',
  external: [
    '@angular/core',
    'rxjs/BehaviorSubject',
    'rxjs/Observable',
    'rxjs/Subject'
  ],
  globals: {
    '@angular/core': 'ng.core',
    'rxjs/BehaviorSubject': 'Rx',
    'rxjs/Observable': 'Rx',
    'rxjs/Subject': 'Rx'
    //'rxjs/add/operator/map': 'Rx.Observable.prototype',
    //'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
    //'rxjs/add/observable/fromEvent': 'Rx.Observable',
    //'rxjs/add/observable/of': 'Rx.Observable'
  }
}