import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-component/login-component';
import { DashboardComponent } from './dashboard-component/dashboard-component';
import { UserComponent } from './dashboard-component/user-component/user-component';
import { ProductComponent } from './dashboard-component/product-component/product-component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: "", redirectTo: 'login', pathMatch: 'full'},
    {path: "login", component: LoginComponent},
    {path: "dashboard", component: DashboardComponent,
      children:[
        {path:"", redirectTo: "user", pathMatch: 'full'},
        {path: "user", component: UserComponent},
        {path: "product", component: ProductComponent}
      ]
    },
    {path: "**", redirectTo: "login"}
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })

// export class AppRoutingModule {}


