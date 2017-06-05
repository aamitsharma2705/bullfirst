import { Component, OnInit } from '@angular/core';

import { Account } from '../../objects/account.model';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styles: [`.actions {
    flex: 1;
    display: flex;
    justify-content: flex-end;
}`],
  providers: [AccountService]
})
export class AccountsComponent implements OnInit {

  selectedAccountIndex: number;
  accounts: Account[];
  constructor(private aService: AccountService) { }

  ngOnInit() {
    this.accounts = this.aService.getAccounts();
    this.aService.accountAdded.subscribe(() =>  {
      this.accounts = this.aService.getAccounts();
    });
  }

  addAccount() {
    this.aService.addAccount();
  }

  onRowSelection(acc) {
    this.selectedAccountIndex = acc;
  }

}
