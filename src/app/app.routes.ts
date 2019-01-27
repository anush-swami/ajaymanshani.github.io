import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SearchDashboardComponent } from "./search-dashboard/search-dashboard.component"

import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent
    },
    {
        path: 'searchView',
        component: SearchDashboardComponent
    }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
