import { Component, OnInit } from '@angular/core';
import { IExchangeRate } from 'src/app/interfaces/exchange-rate.interface';
import { ExchangeRateService } from '../../../services/exchange-rate.service';

@Component({
  selector: 'app-exchange-rate-search',
  templateUrl: './exchange-rate-search.component.html',
  styleUrls: ['./exchange-rate-search.component.scss']
})
export class ExchangeRateSearchComponent implements OnInit {

  exchangeRate: string = ''

  exchangeRates: IExchangeRate | undefined

  returnIsTrue: boolean = false

  constructor(
    private _service: ExchangeRateService
  ) { }

  ngOnInit(): void {
  }

  returnValueExchangeRates(value: string): any {
    this._service.getExchangeRates(value)
      .subscribe((dataValue: IExchangeRate) => {
        this.exchangeRates = dataValue
        this.returnIsTrue = true
      })
  }

}
