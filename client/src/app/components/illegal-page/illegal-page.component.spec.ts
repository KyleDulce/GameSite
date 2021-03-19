import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllegalPageComponent } from './illegal-page.component';

describe('IllegalPageComponent', () => {
  let component: IllegalPageComponent;
  let fixture: ComponentFixture<IllegalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllegalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IllegalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
