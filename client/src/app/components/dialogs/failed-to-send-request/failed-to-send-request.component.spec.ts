import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedToSendRequestComponent } from './failed-to-send-request.component';

describe('FailedToSendRequestComponent', () => {
  let component: FailedToSendRequestComponent;
  let fixture: ComponentFixture<FailedToSendRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailedToSendRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedToSendRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
