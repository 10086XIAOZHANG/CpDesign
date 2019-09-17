import { Dispatch } from 'redux';
import { SAVE_ORDER } from '@/containers/actionTypes';
export const saveOrderId = (params: any) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: SAVE_ORDER,
      payload: params
    });
  } catch (error) {
    console.log(error);
  }
};
