import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './dashboards/default/default.component';

import {ListChildsComponent} from "./Child/list-childs/list-childs.component";
import {ListstockComponent} from "./Stock/liststock/liststock.component";
import {AddstockComponent} from "./Stock/addstock/addstock.component";
import {
  ConventionDePartenariatComponent
} from "./usac/univers-adultes/convention-de-partenariat/convention-de-partenariat.component";
import {ListEquipComponent} from "./Equip/list-equip/list-equip.component";
import {AddEquipComponent} from "./Equip/add-equip/add-equip.component";
import {EditStockComponent} from "./Stock/edit-stock/edit-stock.component";
import {ListMatchComponent} from "./Match/list-match/list-match.component";
import {CalendarComponent} from "./calendar/calendar/calendar.component";
import {AddMatchComponent} from './Match/add-match/add-match.component';
import {AdminGuard} from '../core/guards/admin.guard';
import {AuthGuard} from '../core/guards/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  {path: 'listChild', component: ListChildsComponent , canActivate: [AdminGuard]},
  {path: 'listStock', component: ListstockComponent , canActivate: [AdminGuard]},
  {path: 'editStock/:id', component: EditStockComponent , canActivate: [AdminGuard]},
  {path: 'addStock', component: AddstockComponent, canActivate: [AdminGuard]},
  { path: 'dashboard', component: DefaultComponent , canActivate: [AdminGuard]},
  { path: 'calendar', component: CalendarComponent , canActivate: [AdminGuard]},
  {path: 'listEquip' , component: ListEquipComponent , canActivate: [AdminGuard]},
  {path: 'addEquip' , component: AddEquipComponent , canActivate: [AdminGuard] },
  {path: 'listChild', component: ListChildsComponent , canActivate: [AdminGuard]},
  {path: 'listMatch', component: ListMatchComponent , canActivate: [AdminGuard]},
  {path: 'addMatch', component: AddMatchComponent , canActivate: [AdminGuard] },
  { path: 'crypto', loadChildren: () => import('./crypto/crypto.module').then(m => m.CryptoModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
