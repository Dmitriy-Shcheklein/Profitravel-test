import { Actions, MainReducerActions } from "../../types/types"

const addNumber = (numberPhone: number[]): Actions => {

  return {
    type: MainReducerActions.ADD_PHONE_NUMBER,
    payload: numberPhone,
  }
}

const searchNumber = (searchNumberPhone: string): Actions => {
  return {
    type: MainReducerActions.SEARCH_PHONE_NUMBER,
    payload: searchNumberPhone,
  }
}

const addNumberInArray = (phoneNumber: number) => {
  return {
    type: MainReducerActions.ADD_PHONE_IN_ARRAY,
    payload: phoneNumber,
  }
}

export {
  addNumber,
  searchNumber,
  addNumberInArray
}