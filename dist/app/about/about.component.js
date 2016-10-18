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
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var users = [
    { id: 1, name: "Rojas", username: "grojas", avatar: "/Content/images/boy.png" },
    { id: 2, name: "Cadete", username: "cdt", avatar: "/Content/images/girl.png" },
    { id: 3, name: "Rangel", username: "Rgl", avatar: "/Content/images/man.png" }
];
var AboutComponent = (function () {
    function AboutComponent() {
        this.users = users;
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: "about-page",
        styles: ["\n      .profile-card {\n        background: #f3f3f3;\n        border-radius: 4px;\n        padding: 30px;\n        text-align: center;\n      }\n\n      .profile-card img {\n        max-width: 50%;\n        margin: 15px auto;\n      }\n      "],
        template: "\n    <div class=\"row\" *ngIf=\"users\">\n        <div class=\"col-sm-4\" *ngFor=\"let user of users\">\n            <div class=\"profile-card\" [routerLink]=\"['/about', user.username]\">\n                <img [src]=\"user.avatar\" alt=\"\" class=\"img-responsive img-circle\">\n                <h2>{{user.name}}</h2>\n                <p>\n                    <a href=\"https://www.google.com.mx/#q={{ user.username }}\" target=\"_blank\">\n                            {{user.username}}\n                    </a>\n                </p>\n            </div>\n        </div>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map