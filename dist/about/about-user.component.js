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
// import { UserService }  from "../shared/services/user.service";
var AboutUserComponent = (function () {
    function AboutUserComponent(route, 
        // private service: UserService,
        router) {
        this.route = route;
        this.router = router;
    }
    AboutUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        // we've created our abour-user-resolve, so instead of do a request to our service, we just use route.data to recover the date that we already have
        this.route.data.forEach(function (data) {
            _this.user = data.user;
        });
        // // // OR
        // //
        // // this.route.data.forEach((data: { user: User }) => this.user = data.user);
        // //
        // // grab the current username
        // let username = this.route.snapshot.params["username"];
        //
        // this.service.getUser(username).then(user => this.user = user);
        //
        // // this.service.getUser(username).then(user => {
        // //     this.user = user;
        // // });
        //
        // // this.user = users.find(function(user) {
        // //     return user.username === username;
        // // });
        //
        // // console.log(username);
    };
    AboutUserComponent.prototype.goBack = function () {
        // window.history.back();
        this.router.navigate(["/about"]);
    };
    return AboutUserComponent;
}());
AboutUserComponent = __decorate([
    core_1.Component({
        selector: "about-user",
        styles: ["\n      img {\n        /*max-width: 50%;*/\n        max-width: 300px;\n        margin: 20px auto;\n      }\n      "],
        template: "\n    <a class=\"btn btn-sm btn-info\" (click)=\"goBack()\">Go back</a>\n    <div class=\"jumbotron text-center\" *ngIf=\"user\">\n        <h1>{{user.name}} ({{user.username}})</h1>\n        <img alt=\"avatar\" [src]=\"user.avatar\" class=\"img-responsive img-circle\">\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], AboutUserComponent);
exports.AboutUserComponent = AboutUserComponent;
//# sourceMappingURL=about-user.component.js.map