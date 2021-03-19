import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePPDialogComponent } from './change-ppdialog.component';

describe('ChangePPDialogComponent', () => {
  let component: ChangePPDialogComponent;
  let fixture: ComponentFixture<ChangePPDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePPDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePPDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
