import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallClientsComponent } from './getall-clients.component';

describe('GetallClientsComponent', () => {
  let component: GetallClientsComponent;
  let fixture: ComponentFixture<GetallClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetallClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
