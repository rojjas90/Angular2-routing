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
var usersPromise = Promise.resolve([
    { id: 1, name: "Rojas", username: "grojas", avatar: "/Content/images/boy.png" },
    { id: 2, name: "Cadete", username: "cdt", avatar: "/Content/images/girl.png" },
    { id: 3, name: "Rangel", username: "Rgl", avatar: "/Content/images/man.png" }
]);
var UserService = (function () {
    function UserService() {
    }
    // get all users
    UserService.prototype.getUser = function () {
        return userPromise;
    };
    // find a specific user
    UserService.prototype.getUser = function (username) {
        return userPromise.then(function (users) { return users.find(function (user) { return user.username === username; }); });
        // let user = userPromise.then(user => {
        //     return users.find(user => {
        //         return user.username === username;
        //     });
        // });
        //
        // return user;
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.services.js.map