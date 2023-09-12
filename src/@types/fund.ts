export type FundTypes = 'wind' | 'solar' | 'nature';

export type FundBalance = {
  value: number;
  date: string;
};

export type FundDataType = {
  id: string;
  title: string;
  type: FundTypes;
  balance: number;
  percentageGrowth: number;
  valueGrowth?: number;
  latestBalances: FundBalance[];
};
