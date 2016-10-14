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
var AppComponent = (function () {
    function AppComponent() {
        this.message = "This is the sample message.";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        styles: ["\n\n  "],
        template: "\n    <header>\n        <nav class=\"navbar navbar-inverse\">\n            <div class=\"container-fluid\">\n                <div class=\"navbar-header\">\n                    <a href=\"#\" class=\"navbar-brand\">My Routing App</a>\n                </div>\n\n                <ul class=\"nav navbar-nav\">\n                    <li><a href=\"#\">Home1</a></li>\n                    <li><a href=\"#\">Home2</a></li>\n                    <li><a href=\"#\">Home3</a></li>\n                </ul>\n            </div>\n        </nav>\n    </header>\n\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n    <!--  <div class=\"jumbotron text-center\">\n        <h1>The App Lives!</h1>\n        <p>{{ message }}</p>\n      </div> -->\n\n<!--      <home-page></home-page>\n      <about-page></about-page>\n      <contact-page></contact-page> -->\n  "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map