import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent }  from "./home/home.component";
import { ContactComponent }  from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { AboutUserComponent }  from "./about/about-user.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const appRoutes: Routes = [
    // { path: "", component: HomeComponent },
    {
        path: "",
        redirectTo: "/about",
        pathMatch: "full"
    },
    { path: "about", component: AboutComponent },
    { path: "contact", component: ContactComponent },
    { path: "about/:username", component: AboutUserComponent },
    { path: "**", component: NotFoundComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
