export enum DemoFilter {
  ALL = 0,
  ACTIVE,
  COMPLETED
}

export const DEMO_FILTER_TYPES = [
  DemoFilter.ALL,
  DemoFilter.ACTIVE,
  DemoFilter.COMPLETED
];

export const DEMO_FILTER_TITLES = {
  [DemoFilter.ALL]: 'All',
  [DemoFilter.ACTIVE]: 'Active',
  [DemoFilter.COMPLETED]: 'Completed'
};

export const DEMO_FILTER_LOCATION_HASH = {
  [DemoFilter.ALL]: '#',
  [DemoFilter.ACTIVE]: '#active',
  [DemoFilter.COMPLETED]: '#completed'
};
