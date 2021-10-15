import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as actionsCreators from '../store/actions/mainReducerActions'


export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionsCreators, dispatch)
}