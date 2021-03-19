import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecOrPlayComponent } from './spec-or-play.component';

describe('SpecOrPlayComponent', () => {
  let component: SpecOrPlayComponent;
  let fixture: ComponentFixture<SpecOrPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecOrPlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecOrPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
