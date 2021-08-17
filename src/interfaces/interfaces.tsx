export interface IActivity {
  activity: string;
  type: string;
  participants: number;
  key: number;
}
export interface ISnackbarProps {
  suggestResponse: any;
  snackbar: boolean;
  snackbarClose: () => void;
}
export interface ISpinnerProps {
  loading: boolean;
}

interface IFavoriteActivity {
  activity: string;
  type: string;
  key: number;
  participants: number;
  liked?: boolean;
}
export interface IFavoriteActivitiesProps {
  activities: IFavoriteActivity[];
  input: string;
  checked: string[];
  count: number;
  drawerType: string;
}

export interface ISearchFieldProps {
  onCheckFilter: (title: string, checked: boolean) => void;
  onSearch: (value: string) => void;
  onCountChange: (count: number) => void;
  count: number;
}

export interface IFilterProps {
  switchType: (title: IFilterProps["title"], checked: boolean) => void;
  title: string;
  icon: React.ReactNode;
}
