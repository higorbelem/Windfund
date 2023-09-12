export type FundTypes = 'wind' | 'solar' | 'nature';

export type FundDataType = {
  id: string;
  type: FundTypes;
  balance: number;
  percentageGrowth: number;
  latestBalances: number[];
};
