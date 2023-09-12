import {FundDataType} from '#/@types/fund';

export const fundMockedData: FundDataType[] = [
  {
    id: '1',
    type: 'wind',
    balance: 1032.23,
    percentageGrowth: 3.51,
    latestBalances: [
      1000.23, 910.23, 860.23, 920.23, 700.23, 1000.23, 910.23, 860.23, 920.23,
      700.23,
    ],
  },
  {
    id: '2',
    type: 'solar',
    balance: 986.61,
    percentageGrowth: -0.13,
    latestBalances: [
      1000.23, 910.23, 860.23, 920.23, 700.23, 1000.23, 910.23, 860.23, 920.23,
      700.23,
    ],
  },
  {
    id: '3',
    type: 'nature',
    balance: 1122.56,
    percentageGrowth: 0,
    latestBalances: [
      1000.23, 910.23, 860.23, 920.23, 700.23, 1000.23, 910.23, 860.23, 920.23,
      700.23,
    ],
  },
];
