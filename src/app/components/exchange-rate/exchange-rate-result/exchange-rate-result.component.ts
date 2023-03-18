import { IExchangeRate } from 'src/app/interfaces/exchange-rate.interface';
import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-exchange-rate-result',
  templateUrl: './exchange-rate-result.component.html',
  styleUrls: ['./exchange-rate-result.component.scss']
})
export class ExchangeRateResultComponent implements OnChanges {

  private _resultExchageRate: IExchangeRate | undefined

  get returnExchageRate(): IExchangeRate | undefined {
    return this._resultExchageRate
  }

  @Input() set resultExchageRate(value: IExchangeRate | undefined){
    this._resultExchageRate = value
  }

  finalResultExchageRate: IExchangeRate | undefined

  constructor() { }

  ngOnChanges(): void{
    this.finalResultExchageRate = this._resultExchageRate
  }


}
