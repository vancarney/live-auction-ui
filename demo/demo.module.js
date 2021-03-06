"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var src_1 = require("../src");
var demo_component_1 = require("./demo.component");
var DemoModule = (function () {
    function DemoModule() {
    }
    return DemoModule;
}());
DemoModule = __decorate([
    core_1.NgModule({
        declarations: [demo_component_1.DemoComponent],
        imports: [platform_browser_1.BrowserModule, src_1.AuctionUiModule.forRoot()],
        bootstrap: [demo_component_1.DemoComponent]
    })
], DemoModule);
exports.DemoModule = DemoModule;
//# sourceMappingURL=demo.module.js.map