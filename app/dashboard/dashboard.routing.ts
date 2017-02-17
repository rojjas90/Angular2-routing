import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { DashboardUsersComponent } from "./users/dashboard-users.component";
import { DashboardUsersHomeComponent } from "./users/dashboard-users-home.component";
import { DashboardUserDetailsComponent } from "./users/dashboard-user-details.component";
import { AuthGuard } from "../shared/guards/auth-guard.service";

export const dashboardRoutes: Routes = [
    {
        path: "dashboard",
        children: [
            {
                path: "",
                // we want to make sure that this route is protected with guard
                canActivate: [AuthGuard],
                component: DashboardComponent
            },
            {
                path: "users",
                component: DashboardUsersComponent,
                // for all child route under 'users', let's make sure that this, all have to be authenticated
                canActivateChild: [AuthGuard],
                children: [
                    {
                        path: "",
                        component: DashboardUsersHomeComponent
                    },
                    {
                        path: ":username",
                        component: DashboardUserDetailsComponent
                    }
                ]
            }
        ]
    }
];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
