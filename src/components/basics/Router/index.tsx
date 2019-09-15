export interface IRouteData {
  pathname: string;
  query?: any;
  search?: string;
  state?: any;
}

declare const router: {
  push: (path: string | IRouteData) => void;
  replace: (path: string | IRouteData) => void;
  go: (count: number) => void;
  goBack: () => void;
};
export default router;
