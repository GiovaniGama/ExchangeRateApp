import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRateResultComponent } from './exchange-rate-result.component';

describe('ExchangeRateResultComponent', () => {
  let component: ExchangeRateResultComponent;
  let fixture: ComponentFixture<ExchangeRateResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeRateResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeRateResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
