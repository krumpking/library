export interface Genre {
  genre: string;
  url: string;
  color: string;
  id: number;
}

export interface Category {
  title: string;
  id: number;
  url: string;
}

export interface IAccount {
  accountName: string;
  accountNo: number;
  branchCode: number;
  city: string;
  country: string;
  balance: string;
  branchName: string;
}
