// import { environment } from "@/utils/global";
import { Dispatch } from 'redux';
const serverUrl: string =
  process.env.CP_DESIGN_ENV === 'sandbox' ? 'http://test/' : 'https://build/';

export const fetchPubTransactionRecords = (params: any) => async (
  dispatch: Dispatch
) => {
  try {
    // const response = await axios.post(
    //   serverUrl + "getTransactionRecords",
    //   params
    // );
    // console.log(response);
    console.log(serverUrl);
  } catch (error) {
    console.log(error);
  }
};
