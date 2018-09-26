import { SeekUlModule } from './seek-ul.module';

describe('SeekUlModule', () => {
  let seekUlModule: SeekUlModule;

  beforeEach(() => {
    seekUlModule = new SeekUlModule();
  });

  it('should create an instance', () => {
    expect(seekUlModule).toBeTruthy();
  });
});
