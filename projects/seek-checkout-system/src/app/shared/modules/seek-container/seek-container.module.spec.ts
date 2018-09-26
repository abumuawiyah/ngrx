import { SeekContainerModule } from './seek-container.module';

describe('SeekContainerModule', () => {
  let seekContainerModule: SeekContainerModule;

  beforeEach(() => {
    seekContainerModule = new SeekContainerModule();
  });

  it('should create an instance', () => {
    expect(seekContainerModule).toBeTruthy();
  });
});
