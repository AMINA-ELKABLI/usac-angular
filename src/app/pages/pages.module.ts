import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NgbNavModule,
  NgbDropdownModule,
  NgbModalModule,
  NgbTooltipModule,
  NgbCollapseModule,
  NgbCarouselModule, NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SimplebarAngularModule } from 'simplebar-angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from "@fullcalendar/bootstrap";
import { LightboxModule } from 'ngx-lightbox';

import { WidgetModule } from '../shared/widget/widget.module';
import { UIModule } from '../shared/ui/ui.module';

import { PagesRoutingModule } from './pages-routing.module';

import { DashboardsModule } from './dashboards/dashboards.module';

import { CryptoModule } from './crypto/crypto.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListChildsComponent } from './Child/list-childs/list-childs.component';
import { ListstockComponent } from './Stock/liststock/liststock.component';
import { AddstockComponent } from './Stock/addstock/addstock.component';
import { ListEquipComponent } from './Equip/list-equip/list-equip.component';
import { AddEquipComponent } from './Equip/add-equip/add-equip.component';
import { OffreEntrepriseComponent } from './usac/univers-adultes/offre-entreprise/offre-entreprise.component';
import { ConventionDePartenariatComponent } from './usac/univers-adultes/convention-de-partenariat/convention-de-partenariat.component';
import { FootComponent } from './usac/univers-enfant/foot/foot.component';
import { BasketComponent } from './usac/univers-enfant/basket/basket.component';
import { EditStockComponent } from './Stock/edit-stock/edit-stock.component';
import { AddMatchComponent } from './Match/add-match/add-match.component';
import { ListMatchComponent } from './Match/list-match/list-match.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';





FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
  bootstrapPlugin
]);

@NgModule({
  declarations: [ ListChildsComponent, ListstockComponent, AddstockComponent, ListEquipComponent, AddEquipComponent, OffreEntrepriseComponent, ConventionDePartenariatComponent, FootComponent, BasketComponent, EditStockComponent, AddMatchComponent, ListMatchComponent, CalendarComponent],
    imports: [
        CommonModule,
        FormsModule,
        NgbDropdownModule,
        NgbModalModule,
        PagesRoutingModule,
        NgApexchartsModule,
        ReactiveFormsModule,
        DashboardsModule,
        CryptoModule,
        HttpClientModule,
        UIModule,
        WidgetModule,
        FullCalendarModule,
        NgbNavModule,
        NgbTooltipModule,
        NgbCollapseModule,
        SimplebarAngularModule,
        LightboxModule,
        NgbCarouselModule,
        NgbModule

    ],
  providers: [DatePipe],
})
export class PagesModule { }
