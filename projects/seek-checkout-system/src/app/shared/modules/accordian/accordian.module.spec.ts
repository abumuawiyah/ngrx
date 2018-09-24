import { AccordianModule } from './accordian.module';

describe('AccordianModule', () => {
  let accordianModule: AccordianModule;

  beforeEach(() => {
    accordianModule = new AccordianModule();
  });

  it('should create an instance', () => {
    expect(accordianModule).toBeTruthy();
  });
});
