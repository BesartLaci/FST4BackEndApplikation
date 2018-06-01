import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { PackagesViewComponent } from './components/packages-view/packages-view.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { OrderActivitiesComponent } from './components/order-activities/order-activities.component';
import { HistoryComponent } from './components/history/history.component';
import { ChocolatesComponent } from './components/chocolates/chocolates.component';
import { CustomersComponent } from './components/customers/customers.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        QuickViewComponent,
        PackagesViewComponent,
        IngredientsComponent,
        OrderActivitiesComponent,
        HistoryComponent,
        ChocolatesComponent,
        CustomersComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'quick-view', component: QuickViewComponent },
            { path: 'packages-view', component: PackagesViewComponent },
            { path: 'ingredients', component: IngredientsComponent },
            { path: 'order-activities', component: OrderActivitiesComponent },
            { path: 'history', component: HistoryComponent },
            { path: 'chocolates', component: ChocolatesComponent },
            { path: 'customers', component: CustomersComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
