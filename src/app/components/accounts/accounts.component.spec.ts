import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsComponent } from './accounts.component';
import { ListComponent} from './list/list.component';
import { ChartComponent } from '../chart/chart.component';

import { AccountService } from '../../services/account.service';

describe('AccountsComponent', () => {
  let component: AccountsComponent;
  let fixture: ComponentFixture<AccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsComponent, ListComponent, ChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render app-list as child', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-list')).toBeTruthy();
  }));


  it('should render app-chart as child', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-chart')).toBeTruthy();
  }));

  it('should call addAccount on  button Add account click', async(() => {
    spyOn(component, 'addAccount');

    const button = fixture.debugElement.nativeElement.querySelector('.actions>button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.addAccount).toHaveBeenCalled();
    });
  }));

  it('should load accounts using service', () => {
    const service = fixture.debugElement.injector.get(AccountService);
    fixture.detectChanges();
    expect(service.getAccounts()).toEqual(component.accounts);
  });
});
