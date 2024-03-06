import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { DefaultComponent } from './dashboards/default/default.component';

import {ListChildsComponent} from "./Child/list-childs/list-childs.component";
import {ListstockComponent} from "./Stock/liststock/liststock.component";
import {AddstockComponent} from "./Stock/addstock/addstock.component";
import {
  ConventionDePartenariatComponent
} from "./usac/univers-adultes/convention-de-partenariat/convention-de-partenariat.component";
import {FootComponent} from "./usac/univers-enfant/foot/foot.component";
import {ListEquipComponent} from "./Equip/list-equip/list-equip.component";
import {AddEquipComponent} from "./Equip/add-equip/add-equip.component";
import {EditStockComponent} from "./Stock/edit-stock/edit-stock.component";

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  {path: 'listChild', component: ListChildsComponent},
  {path: 'listStock', component: ListstockComponent},
  {path: 'editStock', component: EditStockComponent},
  {path: 'addStock/:id', component: AddstockComponent},
  { path: 'dashboard', component: DefaultComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'convetion', component: ConventionDePartenariatComponent },
   {path:'foot', component:FootComponent},
  {path:'listEquip' , component:ListEquipComponent},
  {path:'addEquip' , component:AddEquipComponent},
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  { path: 'crypto', loadChildren: () => import('./crypto/crypto.module').then(m => m.CryptoModule) },
  { path: 'email', loadChildren: () => import('./email/email.module').then(m => m.EmailModule) },
  { path: 'pages', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule) },
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },

  { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
