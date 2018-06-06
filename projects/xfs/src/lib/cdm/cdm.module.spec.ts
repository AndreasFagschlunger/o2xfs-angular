import { CdmModule } from './cdm.module';

describe('CdmModule', () => {
  let cdmModule: CdmModule;

  beforeEach(() => {
    cdmModule = new CdmModule();
  });

  it('should create an instance', () => {
    expect(cdmModule).toBeTruthy();
  });
});
