import { NgModule }  from "@angular/core";
import { CommonModule } from "@angular/common";

// This it should give us, everything we need to gets in to two-way binding going
import { FormsModule } from "@angular/forms";

import { DashboardComponent } from "./dashboard.component";
import { dashboardRouting } from "./dashboard.routing";
import { DashboardUsersComponent } from "./users/dashboard-users.component";
import { DashboardUsersHomeComponent } from "./users/dashboard-users-home.component";
import { DashboardUserDetailsComponent } from "./users/dashboard-user-details.component";
import { UserService } from "../shared/services/user.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        dashboardRouting
    ],
    declarations: [
        DashboardComponent,
        DashboardUsersComponent,
        DashboardUsersHomeComponent,
        DashboardUserDetailsComponent
    ],
    providers: [
        UserService
    ]
})
export class DashboardModule { }
