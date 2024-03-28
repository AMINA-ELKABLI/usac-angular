import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './layouts/layout.component';
import { CyptolandingComponent } from './cyptolanding/cyptolanding.component';
import { Page404Component } from './extrapages/page404/page404.component';
import {UserLayout} from './layouts/user/user-layout.component';
import {NoAuthGuard} from './core/guards/no-auth-guard';
import {AdminGuard} from './core/guards/admin.guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: '', component: LayoutComponent, loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  {
    path: 'user',
    component: UserLayout,
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  { path: 'pages', loadChildren: () => import('./extrapages/extrapages.module').then(m => m.ExtrapagesModule)},
 // {path: 'addChild', component: AddChildComponent , canActivate: [AuthGuard] },
  {path: 'home', component: CyptolandingComponent },
  { path: '**', component: Page404Component },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
