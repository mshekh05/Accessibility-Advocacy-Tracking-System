import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketFormVolunteerComponent } from './ticket-form-volunteer.component';

describe('TicketFormVolunteerComponent', () => {
  let component: TicketFormVolunteerComponent;
  let fixture: ComponentFixture<TicketFormVolunteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketFormVolunteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketFormVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
