var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { SampleNg2Service } from './sample-ng2-service';
var SampleNg2Module = (function () {
    function SampleNg2Module() {
    }
    return SampleNg2Module;
}());
SampleNg2Module = __decorate([
    NgModule({
        imports: [
            HttpModule
        ],
        providers: [
            SampleNg2Service
        ]
    })
], SampleNg2Module);
export { SampleNg2Module };
//# sourceMappingURL=sample-ng2-module.js.map