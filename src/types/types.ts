export enum MainReducerActions {
  ADD_PHONE_NUMBER = 'ADD_PHONE_NUMBER',
  SEARCH_PHONE_NUMBER = 'SEARCH_PHONE_NUMBER',
}

export interface State {
  numberPhone: number[];
  numberForSearch: string;
}

export interface AddPhoneNumber {
  type: MainReducerActions.ADD_PHONE_NUMBER;
  payload: number[];
}

export interface SearchPhoneNumber {
  type: MainReducerActions.SEARCH_PHONE_NUMBER;
  payload: string;
}

export type Actions = AddPhoneNumber | SearchPhoneNumber;