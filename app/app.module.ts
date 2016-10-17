import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule }  from "@angular/forms";
import { appRouting }  from "./app.routing";
import { AppComponent } from "./app.component";
import { HomeComponent }  from "./home/home.component";
import { ContactComponent }  from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        appRouting
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        AboutComponent,
        NotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
