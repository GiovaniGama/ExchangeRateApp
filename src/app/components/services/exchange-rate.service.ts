import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IExchangeRate } from 'src/app/interfaces/exchange-rate.interface';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  private readonly URL = environment.apiURL
  private readonly API_KEY = environment.API_KEY

  constructor(
    private _http: HttpClient
  ) { }

  getExchangeRates(from_symbol: string): Observable<IExchangeRate[]>{
    const url = `${this.URL}?apiKey=${this.API_KEY}/&from_symbol=${from_symbol}&to_symbol=BRL`
    return this._http.get<IExchangeRate[]>(url)
  }

}
