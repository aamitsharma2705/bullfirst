import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/accounts/list/list.component';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    HeaderComponent,
    ListComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
