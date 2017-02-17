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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../../shared/services/user.service");
var DashboardUserDetailsComponent = (function () {
    function DashboardUserDetailsComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    DashboardUserDetailsComponent.prototype.ngOnInit = function () {
        // snapshot which won't change over the life cycle of a component
        // router provide a Observable for the parameters, and Observable is 'like' a data over the time, so is not just a snapshot, it's gonna be the parameters over time as they change
        // so, we gonna refactor and use Observable instead of snapshot
        var _this = this;
        // we gonna make sure the onchanges we re-evaluate our users
        // now this component will look for everytime the parameters in the route changes, and it will update the user in this component
        this.route.params.forEach(function (params) {
            var username = params["username"];
            _this.service.getUser(username).then(function (user) {
                console.log(user);
                return _this.user = user;
            });
        });
        // // OR
        // let username = this.route.snapshot.params["username"];
        // this.service.getUser(username).then(user => {
        //     console.log(user);
        //     return this.user = user;
        // });
    };
    return DashboardUserDetailsComponent;
}());
DashboardUserDetailsComponent = __decorate([
    core_1.Component({
        template: "\n    <div *ngIf=\"user\">\n         <h2>{{user.name}}</h2>\n    </div>\n    ",
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.ActivatedRoute])
], DashboardUserDetailsComponent);
exports.DashboardUserDetailsComponent = DashboardUserDetailsComponent;
//# sourceMappingURL=dashboard-user-details.component.js.map