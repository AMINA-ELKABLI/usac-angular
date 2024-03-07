import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    NgbNavModule,
    NgbDropdownModule,
    NgbModalModule,
    NgbTooltipModule,
    NgbCollapseModule,
    NgbCarouselModule
} from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SimplebarAngularModule } from 'simplebar-angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import bootstrapPlugin from "@fullcalendar/bootstrap";
import { LightboxModule } from 'ngx-lightbox';

import { WidgetModule } from '../shared/widget/widget.module';
import { UIModule } from '../shared/ui/ui.module';

import { PagesRoutingModule } from './pages-routing.module';

import { DashboardsModule } from './dashboards/dashboards.module';

import { CryptoModule } from './crypto/crypto.module';
import { EmailModule } from './email/email.module';
import { UtilityModule } from './utility/utility.module';
import { FormModule } from './form/form.module';
import { IconsModule } from './icons/icons.module';
import { CalendarComponent } from './calendar/calendar.component';
import { MapsModule } from './maps/maps.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChatComponent } from './chat/chat.component';

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
import { AddReservationComponent } from './reservation/add-reservation/add-reservation.component';




FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  bootstrapPlugin
]);

@NgModule({
  declarations: [CalendarComponent, ChatComponent,  ListChildsComponent, ListstockComponent, AddstockComponent, ListEquipComponent, AddEquipComponent, OffreEntrepriseComponent, ConventionDePartenariatComponent, FootComponent, BasketComponent, EditStockComponent, AddReservationComponent],
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

        EmailModule,
        HttpClientModule,
        UIModule,
        UtilityModule,
        FormModule,
        IconsModule,
        WidgetModule,
        MapsModule,
        FullCalendarModule,
        NgbNavModule,
        NgbTooltipModule,
        NgbCollapseModule,
        SimplebarAngularModule,
        LightboxModule,
        NgbCarouselModule
    ],
})
export class PagesModule { }
