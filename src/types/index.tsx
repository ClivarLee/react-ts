export interface StoreState {
  languageName: string;
  enthusiasmLevel: number;
}
export interface IniteState {
  loading: Boolean;
  error: Boolean;  
  isSuccess: Boolean;
  data: Object;
}
export interface PayloadInterface {
  payload: Object;
  type: String;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: Function;
    App: App;
  }
}
interface App {
  close: Function;
  hideBar: () => void;
}