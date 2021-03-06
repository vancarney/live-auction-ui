"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var bidding_service_1 = require("./bidding.service");
var BiddingComponent = (function () {
    function BiddingComponent(biddingService) {
        var _this = this;
        this.biddingService = biddingService;
        this.currentBid = 0.00;
        this.sendBid = function () {
            _this.biddingService.sendBid(_this.currentBid + 1.00);
        };
        this.ngOnInit = function () {
            console.log("init getBids");
        };
        this.ngOnDestroy = function () {
            _this.connection.unsubscribe();
        };
        console.log("constructor");
        this.connection = this.biddingService.getBids().subscribe(function (bid) {
            console.log("currentBid " + bid);
            _this.currentBid = Number(bid);
        });
    }
    return BiddingComponent;
}());
BiddingComponent = __decorate([
    core_1.Component({
        selector: "bidding-component",
        templateUrl: "src/bidding/bidding.component.html"
    }),
    __metadata("design:paramtypes", [bidding_service_1.BiddingService])
], BiddingComponent);
exports.BiddingComponent = BiddingComponent;
//# sourceMappingURL=bidding.component.js.map