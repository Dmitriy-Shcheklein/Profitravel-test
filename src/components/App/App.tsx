import { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import useTypeSelector from "../../hooks/useTypeSelector";
import Input from "../Input";
import Notify from "../Notify";
import PhoneNumberList from "../PhoneNumberList";

import './app.scss';

const searchArray: number[] = [9528262065, 9528262064, 9528262061, 9528262061, 9528262022]

const App = () => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [isNotify, setNotify] = useState(false)

  const { numberForSearch } = useTypeSelector(state => state.mainReducer);
  const { addNumber } = useActions();

  const showNotify = () => {
    setNotify(true);
    setTimeout(() => {
      setNotify(false)
    }, 3000)
  }

  const phoneNumberChanged = (phoneNumber: string) => {
    setPhoneNumber(phoneNumber)
  }

  useEffect(() => {
    const newArr = searchArray.filter(item => {
      return item.toString().includes(numberForSearch)
    });
    addNumber(newArr)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberForSearch])

  return (
    <div className='container'>
      <h1>База данных телефонных номеров</h1>
      <div className='inputWrapper'>
        <Input
          mask="###-###-##-##"
          value={phoneNumber}
          onChange={phoneNumberChanged}
          searchArray={searchArray}
          setPhoneNumber={setPhoneNumber}
          showNotify={showNotify}
        />
        <div className='listWrapper'>
          {(numberForSearch !== '') && <PhoneNumberList />}
        </div>
      </div>
      {isNotify && <Notify />}
    </div>
  );
}

export default App;
