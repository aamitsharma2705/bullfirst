import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { Account } from '../../../objects/account.model';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all accounts passed as property', () => {
    component.accounts = [new Account('test', 55456, 676767, '#fff')];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('.row').length).toEqual(1);
  });

  it('should render onSelected on row click', () => {
    spyOn(component, 'onSelected');
    component.accounts = [new Account('test', 55456, 676767, '#fff')];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('.row').click();

    expect(component.onSelected).toHaveBeenCalled();
  });


  it('should emit output prop rowselected on row click', () => {
    spyOn(component.rowSelected, 'emit');
    component.accounts = [new Account('test', 55456, 676767, '#fff')];
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('.row').click();

    expect(component.rowSelected.emit).toHaveBeenCalled();
  });
});
