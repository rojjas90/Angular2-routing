import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent }  from "./home/home.component";
import { ContactComponent }  from "./contact/contact.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    // {
    //     path: "",
    //     redirectTo: "/about",
    //     pathMatch: "full"
    // },
    { path: "about", loadChildren: "app/about/about.module#AboutModule" }, // 15.- 2nd: add a new path in app.routing level,
                                                                          // instead of passing a componnent or passing a children we gonna passing loadChildren with a string
                                                                          // the reason it's cause angular doesn't know how to load it when we start up, it only will knows
                                                                          // how to load it when loadChildren and path gets hitted it
    { path: "contact", component: ContactComponent },
    { path: "**", component: NotFoundComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
