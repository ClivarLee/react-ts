import * as reduxActions from 'redux-actions';
import { IniteState, PayloadInterface } from '../types';
const { createAction } = reduxActions;

export default (namespace: String, initeState: IniteState): any => {
  const REQUEST_START: any = createAction(`${namespace}-REQUEST_START`);
  const REQUEST_END: any = createAction(`${namespace}-REQUEST_END`);
  const REQUEST_ERROR: any = createAction(`${namespace}-REQUEST_ERROR`);
  const CLEAR_DATA: any = createAction(`${namespace}-CLEAR_DATA`);
  // 记录请求的的数目，请求数目为0时所有请求完成
  let requestNum: number = 0;
  const { data, ...restIniteState } = initeState;
  const reducersMap = {
    [REQUEST_START](state: IniteState, { payload }: PayloadInterface): IniteState {
      requestNum++;
      return {
        data: { ...data, ...payload },
        ...restIniteState,
        loading: true,
      };
    },
    [REQUEST_END](state: IniteState, { payload }: PayloadInterface): IniteState {
      if (requestNum > 0) {
        requestNum--;
      }
      return {
        data: { ...state.data, ...payload },
        ...restIniteState,
        loading: requestNum !== 0,
        isSuccess: requestNum === 0
      };
    },
    [REQUEST_ERROR](state: IniteState, { payload }: PayloadInterface): IniteState {
      if (requestNum > 0) {
        requestNum--;
      }
      return {
        data: { ...data, ...payload },
        ...restIniteState,
        error: true
      };
    },
    [CLEAR_DATA](): IniteState {
      return initeState;
    }
  };
  return {
    REQUEST_START,
    REQUEST_END,
    REQUEST_ERROR,
    reducersMap
  };
};

export const setIniteState = (isArray = false, initeData: any) => {
  return {
    loading: false,
    error: false,
    isSuccess: false,
    data: initeData ? initeData : isArray ? [] : {}
  };
};
