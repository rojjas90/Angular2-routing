"use strict";
var router_1 = require("@angular/router");
var about_component_1 = require("./about.component");
var about_user_component_1 = require("./about-user.component");
var about_section_component_1 = require("./about-section.component");
var about_resolve_service_1 = require("./about-resolve.service");
var about_user_resolve_service_1 = require("./about-user-resolve.service");
var aboutRoutes = [
    {
        path: "",
        component: about_section_component_1.AboutSectionComponent,
        children: [
            {
                path: "",
                component: about_component_1.AboutComponent,
                // // 16.-  this way, when our componnet is instantiated, the router automatically wrap all the data and added it into the component, so we have access to it,
                // // this way the component knows what it has already and doesn't go out; it's a good idea pass data when we already have it, such as string or stuff like that
                // data: {
                //     message: "this is my data message"
                // }
                // 16.- if we use a http call, and wrap information from somewhere, we would use resolve:...
                resolve: {
                    // we gonna craeted our own resolve service
                    users: about_resolve_service_1.AboutUsersResolve
                }
            },
            {
                path: ":username",
                component: about_user_component_1.AboutUserComponent,
                resolve: {
                    user: about_user_resolve_service_1.AboutUserResolve
                }
            }
        ]
    }
];
exports.aboutRouting = router_1.RouterModule.forChild(aboutRoutes);
//# sourceMappingURL=about.routing.js.map