export type FundTypes = 'wind' | 'solar' | 'nature' | 'tech';

export type FundCategories = 'Highlighted' | 'Value' | 'Vintage' | 'Registry';

export type FundBalance = {
  value: number;
  date: string;
};

export type FundStatsType = {
  aum: string;
  issueDate: string;
  vintageRange: string;
  ter: string;
  priceAtClose: string;
  priceAtOpen: string;
};

export type FundDataType = {
  id: string;
  title: string;
  description?: string;
  cover?: any;
  category?: FundCategories;
  type: FundTypes;
  balance: number;
  percentageGrowth: number;
  valueGrowth?: number;
  latestPrices: FundBalance[];
  stats?: FundStatsType;
  credits?: number;
  creditValue?: number;
  creditPercentageGrowth?: number;
  creditLastPurchace?: string;
  creditsRetired?: number;
};
