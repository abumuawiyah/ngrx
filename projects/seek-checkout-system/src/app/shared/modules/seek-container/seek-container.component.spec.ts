import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekContainerComponent } from './seek-container.component';

describe('SeekContainerComponent', () => {
  let component: SeekContainerComponent;
  let fixture: ComponentFixture<SeekContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
