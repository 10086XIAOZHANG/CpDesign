import axios from '../../core';
export async function getDemoList(params: any) {
  return axios({
    method: 'get',
    url: '/demo/get',
    params
  });
}
