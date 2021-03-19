import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TycoonComponent } from './tycoon.component';

describe('TycoonComponent', () => {
  let component: TycoonComponent;
  let fixture: ComponentFixture<TycoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TycoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TycoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
