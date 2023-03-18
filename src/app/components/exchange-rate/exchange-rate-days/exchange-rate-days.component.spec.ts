import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRateDaysComponent } from './exchange-rate-days.component';

describe('ExchangeRateDaysComponent', () => {
  let component: ExchangeRateDaysComponent;
  let fixture: ComponentFixture<ExchangeRateDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeRateDaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeRateDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
