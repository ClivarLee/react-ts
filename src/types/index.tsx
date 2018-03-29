export interface StoreState {
  languageName: string;
  enthusiasmLevel: number;
}
declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}