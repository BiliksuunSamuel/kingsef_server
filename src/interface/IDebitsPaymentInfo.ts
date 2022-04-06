export interface IDebitPaymentInfo {
  date_paid: string;
  amount: number;
  vendor: string;
  reference: string;
  account: {
    number: string;
    name: string;
    user: string;
    branch: string;
  };
  currency: string;
}
