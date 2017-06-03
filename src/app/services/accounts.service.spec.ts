import { AccountService } from './account.service';

describe('Account Service', () => {
    let service;

    beforeAll(() => {
        service = new AccountService();
    });

    it('should return Array of account object on getAccounts call', () => {
        const accounts = service.getAccounts();
        expect(accounts instanceof Array).toBe(true);
    });

    it('should emit accountAdded on adding a new Account', () => {
        spyOn(service.accountAdded, 'emit');

        service.addAccount();
        expect(service.accountAdded.emit).toHaveBeenCalled();
    });
});
