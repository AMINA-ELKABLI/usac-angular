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
const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  {path: 'listChild', component: ListChildsComponent},
  {path: 'listStock', component: ListstockComponent},
  {path: 'editStock/:id', component: EditStockComponent},
  {path: 'addStock', component: AddstockComponent},
  { path: 'dashboard', component: DefaultComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'convetion', component: ConventionDePartenariatComponent },
  {path:'listEquip' , component:ListEquipComponent},
  {path:'addEquip' , component:AddEquipComponent},
  {path:'listChild', component:ListChildsComponent},
  {path:'listMatch', component:ListMatchComponent},
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  { path: 'crypto', loadChildren: () => import('./crypto/crypto.module').then(m => m.CryptoModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
