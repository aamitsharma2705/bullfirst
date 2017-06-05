import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/accounts/list/list.component';
import { ChartComponent } from './components/chart/chart.component';
import { TradeComponent } from './components/trade/trade.component';
import { TransferComponent } from './components/transfer/transfer.component';

const routes: Routes = [
  { path: '', component: AccountsComponent },
  { path: 'account', component: AccountsComponent },
  { path: 'trade', component: TradeComponent },
  { path: 'transfer', component: TransferComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    HeaderComponent,
    ListComponent,
    ChartComponent,
    TradeComponent,
    TransferComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
