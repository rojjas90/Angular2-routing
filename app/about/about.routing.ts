import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule  }  from "@angular/router";
import { AboutComponent } from "./about.component";
import { AboutUserComponent }  from "./about-user.component";
import { AboutSectionComponent } from "./about-section.component";
import { AboutUserResolve } from "./about-resolve.service";

const aboutRoutes: Routes = [
    {
        path: "", // 15.- 1st: remove path: path: "about" -> path: ""
        component: AboutSectionComponent,
        children: [
            { // whenever we declare children, we always we have to have a path has a blank in it: path: "" ...
                path: "",
                component: AboutComponent,
                // // 16.-  this way, when our componnet is instantiated, the router automatically wrap all the data and added it into the component, so we have access to it,
                // // this way the component knows what it has already and doesn't go out; it's a good idea pass data when we already have it, such as string or stuff like that
                // data: {
                //     message: "this is my data message"
                // }
                // 16.- if we use a http call, and wrap information from somewhere, we would use resolve:...
                resolve: {
                    // we gonna craeted our own resolve service
                    users: AboutUserResolve
                }
            },
            {
                path: ":username",
                component: AboutUserComponent
            }
        ]
    }
    // { path: "about", component: AboutComponent },
    // { path: "about/:username", component: AboutUserComponent }
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);
