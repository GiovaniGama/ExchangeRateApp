import { Component, Input, OnInit } from '@angular/core';
import { IExchangeRate } from 'src/app/interfaces/exchange-rate.interface';
import { ExchangeRateService } from '../../services/exchange-rate.service';

@Component({
  selector: 'app-exchange-rate-search',
  templateUrl: './exchange-rate-search.component.html',
  styleUrls: ['./exchange-rate-search.component.scss']
})
export class ExchangeRateSearchComponent implements OnInit {

  exchangeRate: string = ''
  @Input() exchangeRates: IExchangeRate[] = []


  constructor(
    private _service: ExchangeRateService
  ) { }

  ngOnInit(): void {
  }

  returnValueExchangeRates(value: string): any {
    this._service.getExchangeRates(value)
      .subscribe((dataValue) => {
        this.exchangeRates = dataValue
        console.log(this.exchangeRates)
      })
  }

}
