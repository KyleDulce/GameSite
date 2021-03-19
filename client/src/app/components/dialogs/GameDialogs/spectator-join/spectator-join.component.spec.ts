import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectatorJoinComponent } from './spectator-join.component';

describe('SpectatorJoinComponent', () => {
  let component: SpectatorJoinComponent;
  let fixture: ComponentFixture<SpectatorJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpectatorJoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpectatorJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
