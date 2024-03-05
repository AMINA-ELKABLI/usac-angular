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

const routes: Routes = [
  { path: '', redirectTo: 'dashboard' },
  {path: 'listChild', component: ListChildsComponent},
  {path: 'listStock', component: ListstockComponent},
  {path: 'addStock', component: AddstockComponent},
  { path: 'dashboard', component: DefaultComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'convetion', component: ConventionDePartenariatComponent },
   {path:'foot', component:FootComponent},
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  { path: 'crypto', loadChildren: () => import('./crypto/crypto.module').then(m => m.CryptoModule) },
  { path: 'email', loadChildren: () => import('./email/email.module').then(m => m.EmailModule) },
  { path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule) },
  { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) },
  { path: 'pages', loadChildren: () => import('./utility/utility.module').then(m => m.UtilityModule) },
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
  { path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule) },
  { path: 'charts', loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule) },
  { path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
