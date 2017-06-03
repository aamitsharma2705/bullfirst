import { markParentViewsForCheckProjectedViews } from '@angular/core/src/view/util';
import { EventEmitter, Injectable } from '@angular/core';

import { Account } from '../objects/account.model';

@Injectable()
export class AccountService {
  accountSelected = new EventEmitter<number>();
  accountAdded = new EventEmitter<void>();
  private accounts: Account[] = [
        new Account('Brokerage Account 3', 1999990, 1995826, 'orange'),
        new Account('Account 3', 1949990, 1695856, 'darkorange'),
        new Account('Brokerage Account 1', 1349990, 1595866, 'red'),
        new Account('Brokerage Account 4', 155990, 160826, 'blue'),
        new Account('Brokerage Account 2', 74560, 19956, 'gray'),
        new Account('Account 4', 55006, 53006, 'salmon'),
        new Account('Account 13', 37340, 0, 'green'),
        new Account('Joint Account 1', 28308, 4167, 'darkblue'),
        new Account('Joint Account 2', 10000, 10000, 'teal')
  ];

  constructor() {}

  getAccounts() {
    return this.accounts.slice();
  }

  addAccount() {
      this.accounts.push(new Account('New Account', Math.random() * 100000, Math.random() * 400000, 'cyan'));
      this.accountAdded.emit();
 }
}
