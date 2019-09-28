import { FORM_FIELDS_LOADING_ACTION} from "@/constants/actionTypes";

import { FormFieldsState } from "@/models";

const initialState: FormFieldsState = {
  isLoading: true,
  hasError: false
};

const FormFieldsReducer = (
  state: FormFieldsState = initialState,
  action: any
): FormFieldsState => {
  switch (action.type) {
    case FORM_FIELDS_LOADING_ACTION:
      return {
        isLoading: true,
        hasError: false
      };
    default:
      return state;
  }
};

export default FormFieldsReducer;
