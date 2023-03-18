export interface IExchangeRateDays{
    success: boolean,
    from: string,
    to: string,
    lastUpdatedAt: Date,
    data: [
      {
        open: number,
        high: number,
        low: number,
        close: number,
        date: Date
      }
    ]
}
