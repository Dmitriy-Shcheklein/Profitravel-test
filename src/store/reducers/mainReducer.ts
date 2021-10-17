import { Actions, MainReducerActions, State } from "../../types/types"

const initialState: State = {
  numberPhone: [],
  numberForSearch: '',
}

export const mainReducer = (state: State = initialState, action: Actions) => {

  switch (action.type) {

    case MainReducerActions.ADD_PHONE_NUMBER:
      return {
        ...state,
        numberPhone: action.payload
      };
    case MainReducerActions.SEARCH_PHONE_NUMBER:
      return {
        ...state,
        numberForSearch: action.payload
      }
    case MainReducerActions.ADD_PHONE_IN_ARRAY:
      return {
        ...state,
        numberPhone: [
          ...state.numberPhone,
          action.payload,
        ]
      }
    default:
      return state
  }
}