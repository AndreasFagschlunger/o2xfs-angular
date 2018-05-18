import { CashDispenserModule } from './cash-dispenser.module';

describe('CashDispenserModule', () => {
  let cashDispenserModule: CashDispenserModule;

  beforeEach(() => {
    cashDispenserModule = new CashDispenserModule();
  });

  it('should create an instance', () => {
    expect(cashDispenserModule).toBeTruthy();
  });
});
