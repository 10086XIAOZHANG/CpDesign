import { SAVE_ORDER } from '@/constants/actionTypes';

import { OrderState } from '@/models';

const initialState: OrderState = {
  orderId: ''
};

const OrderReducer = (
  state: OrderState = initialState,
  action: any
): OrderState => {
  switch (action.type) {
    case SAVE_ORDER:
      return {
        orderId: action.payload
      };
    default:
      return state;
  }
};

export default OrderReducer;
