import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GethistoryComponent } from './gethistory.component';

describe('GethistoryComponent', () => {
  let component: GethistoryComponent;
  let fixture: ComponentFixture<GethistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GethistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GethistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
