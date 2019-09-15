import { Dispatch } from 'redux';
// import axios from "axios";
import { SET_GLOBAL_MSG } from '@/containers/actionTypes';
// import {environment} from '@/utils/global';
/**
 * 控制全局消息展示状态
 * @param params 后面可以添加控制更新消息状态
 */
const fetchGlobalMsgAction = (params: any) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: SET_GLOBAL_MSG,
      payload: {
        globalActionStatus: 0, // 0: default, 1: pending, 2: success, 3: fali
        globalLoading: false, // 全局loading
        globalMsg: '', // 全局消息，默认所有操作反馈通过此参数传递
        globalMsgShow: false // 显示全局消息
      }
    });
  } catch (error) {
    console.log(error);
  }
};
export { fetchGlobalMsgAction };
