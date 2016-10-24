"use strict";
var router_1 = require("@angular/router");
var contact_component_1 = require("./contact/contact.component");
var about_component_1 = require("./about/about.component");
var about_user_component_1 = require("./about/about-user.component");
var not_found_component_1 = require("./not-found/not-found.component");
var appRoutes = [
    // { path: "", component: HomeComponent },
    {
        path: "",
        redirectTo: "/about",
        pathMatch: "full"
    },
    { path: "about", component: about_component_1.AboutComponent },
    { path: "contact", component: contact_component_1.ContactComponent },
    { path: "about/:username", component: about_user_component_1.AboutUserComponent },
    { path: "**", component: not_found_component_1.NotFoundComponent }
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map