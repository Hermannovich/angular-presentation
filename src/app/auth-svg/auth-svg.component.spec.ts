import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSvgComponent } from './auth-svg.component';

describe('AuthSvgComponent', () => {
  let component: AuthSvgComponent;
  let fixture: ComponentFixture<AuthSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
