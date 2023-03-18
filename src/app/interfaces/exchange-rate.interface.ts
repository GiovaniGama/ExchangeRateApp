export interface IExchangeRate {
  exchangeRate: number,
  fromSymbol: string,
  lastUpdatedAt: Date
  success: boolean,
  toSymbol: string
}
