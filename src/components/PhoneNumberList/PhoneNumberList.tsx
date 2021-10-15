import useTypeSelector from '../../hooks/useTypeSelector';

import './phoneNumberList.scss';

const PhoneNumberList = () => {

  const { numberPhone } = useTypeSelector(state => state.mainReducer)

  return (
    <>
      <h2>Список найденых номеров телефонов:</h2>
      {!numberPhone.length && <p className='subTitle'>Ничего не найдено</p>}
      <ul>
        {
          numberPhone.map((item, idx) => {
            return (
              <li key={idx}>
                {idx + 1}: {+item}
              </li>
            )
          })}
      </ul>
    </>
  )
}

export default PhoneNumberList
