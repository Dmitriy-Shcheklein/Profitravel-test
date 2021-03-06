import React, { FC, useState } from "react";
import { useActions } from "../../hooks/useActions";
import useTypeSelector from "../../hooks/useTypeSelector";

import './input.scss';

interface InputProps {
  mask: string;
  value: string;
  onChange: (value: string) => void;
  searchArray: number[];
  setPhoneNumber: (value: string) => void;
  showNotify: () => void;
}

const Input: FC<InputProps> = (props) => {

  const { mask, onChange, value, searchArray, setPhoneNumber, showNotify } = props;

  const { searchNumber, addNumberInArray } = useActions();

  const { numberForSearch, numberPhone } = useTypeSelector(state => state.mainReducer);

  const [isBlur, setIsBlur] = useState(false);
  const [isNumberInBase, setIsNumberInBase] = useState(false);
  const [isNullForward, setIsNullForward] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNumberInBase(false);
    setIsNullForward(false);
    const { value } = e.currentTarget;
    const cleanValue = value.replace(/[^\d]/g, '');
    if (searchArray.includes(+cleanValue) && cleanValue.length === 10) {
      setIsNumberInBase(true);
    } else if (value[0] === '0') {
      setIsNullForward(true);
    }
    onChange(cleanValue);
  }

  const formatString = (value: string, mask: string): string => {
    let i = 0;
    let lastReplacedIndex = -1;
    const filledMask = mask.replace(/#/g, (_, j) => {
      if (i >= value.length) {
        return '#';
      }
      lastReplacedIndex = j;
      return value[i++];
    });
    return filledMask.substring(0, lastReplacedIndex + 1);
  }

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    if (value.includes(numberForSearch)) {
      addNumberInArray(+value)
    }
    searchArray.push(+value);
    setPhoneNumber('');
    setIsBlur(false);
    e.preventDefault()
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const cleanValue = value.replace(/[^\d]/g, '');
    searchNumber(cleanValue);
  }

  return (
    <div className='formWrapper'>
      <form onSubmit={submitForm} >
        <div className='inputWrapper'>
          <label htmlFor="">
            <span>?????????????? ?????????? ???????????????? ?????? ???????????????????? ?? ???????? ????????????</span><br />
            <input
              onBlur={() => setIsBlur(true)}
              onFocus={() => setIsBlur(false)}
              className={`${(isBlur && value.length < 10 && value !== '') ? 'errorInput' : null}`}
              value={formatString(value, mask)}
              onChange={handleChange}
              type="text"
              maxLength={13}
            /><br />
          </label><br />
          {
            (isBlur && (value.length < 10 && value.length > 0)) &&
            <small>?????????? ???????????? ???????????????? ???? 10-???? ????????</small>
          }
          {
            isNumberInBase &&
            <small>?????????? ?????? ???????? ?? ???????? ????????????</small>
          }
          {
            isNullForward &&
            <small>?????????? ???? ?????????? ???????????????????? ?? ????????</small>
          }
        </div>
        <button
          onClick={showNotify}
          disabled={(value.length < 10 || isNumberInBase || isNullForward)}
          type='submit'
        >???????????????? ??????????</button><br />
        <label htmlFor=""><span>?????????????? ?????????? ???????????????? ?????? ????????????</span><br />
          <input
            className={`${(numberForSearch !== '' && !numberPhone.length) ?
              'emptyInput' : null}`}
            onChange={handleSearch}
            value={formatString(numberForSearch, mask)}
            type="text"
            maxLength={13}
          />
        </label>
      </form>
    </div>
  )
}

export default Input;
