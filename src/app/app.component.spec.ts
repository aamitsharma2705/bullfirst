import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/accounts/list/list.component';
import { ChartComponent } from './components/chart/chart.component';
import { AccountService } from './services/account.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        AccountsComponent,
        ListComponent,
        ChartComponent
      ]
    });
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'BullFirst'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('BullFirst');
  }));

  it('should render app-hedaer as child', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-header')).toBeTruthy();
  }));

  it('should render app-accounts as child', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-accounts')).toBeTruthy();
  }));
});
