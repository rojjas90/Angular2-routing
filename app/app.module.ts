import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }  from "@angular/forms";
// import { AboutModule }  from "./about/about.module"; // 15.- 3rd: remove about.module autoloading
import { DashboardModule } from "./dashboard/dashboard.module";
import { appRouting }  from "./app.routing";
import { AppComponent } from "./app.component";
import { HomeComponent }  from "./home/home.component";
import { ContactComponent }  from "./contact/contact.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AuthGuard }  from "./shared/guards/auth-guard.service";
import { CanDeactivateGuard } from "./shared/guards/can-deactivate-guard.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        // AboutModule, // 15.- 3rd: remove about.module autoloading
        appRouting,
        DashboardModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        NotFoundComponent
    ],
    providers: [
        AuthGuard,
        CanDeactivateGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
