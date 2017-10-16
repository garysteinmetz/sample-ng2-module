(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/http'), require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/http', '@angular/core'], factory) :
	(factory((global.SampleNg2Module = {}),global.http,global.ng.core));
}(this, (function (exports,http,core) { 'use strict';

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.SampleNg2Service = (function () {
    function SampleNg2Service(http$$1) {
        this.http = http$$1;
    }
    SampleNg2Service.prototype.getMessage = function () {
        return "This is a sample message";
    };
    SampleNg2Service.prototype.getWithHttp = function (url) {
        return this.http.get(url);
    };
    return SampleNg2Service;
}());
exports.SampleNg2Service = __decorate$1([
    core.Injectable(),
    __metadata("design:paramtypes", [http.Http])
], exports.SampleNg2Service);

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.SampleNg2Module = (function () {
    function SampleNg2Module() {
    }
    return SampleNg2Module;
}());
exports.SampleNg2Module = __decorate([
    core.NgModule({
        imports: [
            http.HttpModule
        ],
        providers: [
            exports.SampleNg2Service
        ]
    })
], exports.SampleNg2Module);

var SampleNg2Util = (function () {
    function SampleNg2Util() {
    }
    //
    SampleNg2Util.addNumbers = function (addendOne, addendTwo) {
        return addendOne + addendTwo;
    };
    return SampleNg2Util;
}());

exports.SampleNg2Util = SampleNg2Util;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sampleng2module.umd.js.map
