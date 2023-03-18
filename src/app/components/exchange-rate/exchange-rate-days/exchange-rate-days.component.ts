import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IExchangeRateDays } from 'src/app/interfaces/exchange-rate-days.interface';
import { ExchangeRateService } from 'src/app/services/exchange-rate.service';

@Component({
  selector: 'app-exchange-rate-days',
  templateUrl: './exchange-rate-days.component.html',
  styleUrls: ['./exchange-rate-days.component.scss']
})
export class ExchangeRateDaysComponent implements OnInit, OnChanges {

  private _resultFromSymbol: any

  get returnFromSymbol(): string {
    return this._resultFromSymbol
  }

  @Input() set resultFromSymbol(value: string | undefined){
    this._resultFromSymbol = value
  }

  finalResultFromSymbol: string = ''

  resultExchangeRateDays: IExchangeRateDays | undefined

  finalValueDiff: number = 0

  constructor(
    private _service: ExchangeRateService
  ) { }

  ngOnChanges(): void{
    this.finalResultFromSymbol = this._resultFromSymbol
    this.getThirtyDays(this.finalResultFromSymbol)
  }

  ngOnInit(): void {
    const accordion_item = document.querySelectorAll(".accordion__item");

    accordion_item.forEach((item) => {
      const accordion_header_item = item.querySelector(".accordion__header");

      accordion_header_item?.addEventListener("click", () => {
        const accordion_content_item = item.querySelector(".accordion__content");

        const content_actived = document.querySelector(".active");

        this.VerifyActive(item, accordion_content_item, content_actived);
      });
    });
  }


  VerifyActive(item: any, content: any, content_actived: any) {
    const icon_item = item.querySelector(".accordion__icon");
    const icon_item_active = document.querySelectorAll(".accordion__icon");

    icon_item_active.forEach((item) => (item.innerHTML = "+"));

    if (content_actived) {
      content_actived.style.height = 0;
      content_actived.classList.remove("active");
    }

    if (content !== content_actived) {
      icon_item.innerHTML = "-";
      content.classList.add("active");
      content.style.height = content.scrollHeight + 10 + "px";
    }
  }


  getThirtyDays(fromSymbol: string){
    this._service.getExchangeRatesDays(fromSymbol)
      .subscribe((dataValue: IExchangeRateDays) => {
        this.resultExchangeRateDays = dataValue
      })
  }

  calculateDiff(valueOpen: number, valueClose: number){
    const valueSubtracted = valueOpen - valueClose
    const valueDiff = (valueSubtracted / valueOpen)

    return this.finalValueDiff = valueDiff
  }

}


