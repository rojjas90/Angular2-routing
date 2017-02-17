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
    function DashboardUserDetailsComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
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
                // return this.user = user;
                _this.user = user;
                // preserve our name data  before to change it; just after we would pressed save button, the data will save
                _this.editName = user.name;
            });
        });
        // // OR
        // let username = this.route.snapshot.params["username"];
        // this.service.getUser(username).then(user => {
        //     console.log(user);
        //     return this.user = user;
        // });
    };
    DashboardUserDetailsComponent.prototype.save = function () {
        this.user.name = this.editName;
        this.router.navigate(["/dashboard/users"]);
    };
    DashboardUserDetailsComponent.prototype.cancel = function () {
        this.router.navigate(["/dashboard/users"]);
    };
    return DashboardUserDetailsComponent;
}());
DashboardUserDetailsComponent = __decorate([
    core_1.Component({
        template: "\n    <div class=\"jumbotron\">\n         <div *ngIf=\"user\">\n              <h2>{{user.name}}</h2>\n\n              <div class=\"form-group\">\n                   <input type=\"text\" [(ngModel)]=\"editName\" class=\"form-control\">\n              </div>\n\n              <div class=\"form-group text-center\">\n                   <button (click)=\"cancel()\" class=\"btn btn-danger\">Cancel</button>\n                   <button (click)=\"save()\" class=\"btn btn-success\">Save</button>\n              </div>\n         </div>\n    </div>\n    ",
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.ActivatedRoute,
        router_1.Router])
], DashboardUserDetailsComponent);
exports.DashboardUserDetailsComponent = DashboardUserDetailsComponent;
//# sourceMappingURL=dashboard-user-details.component.js.map