import './App.css'
import Header from '../Header/Header'
import InHelper from '../InHelper/InHelper'
import GetValue from '../GetValue/GetValue'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import { Routes, Route} from 'react-router-dom'

function App() {

  // Функция для преобразования в MySQL-подобный формат данных
  const convertValueInHelperFormat1 = (value:string) => {
    const idsArray = value.split('\n')
    const idsArrayFiltered = idsArray.filter(item => item.trim() !== '')
    return idsArrayFiltered.map((id:string, index) => {
      const idClear = id.trim()
      if(index === 0) {
        return idClear
      }
      return " " + idClear
    })
  }

  // Функция для преобразования в Clickhouse-подобный формат данных
  const convertValueInHelperFormat2 = (value:string) => {
    const idsArray = value.split('\n')
    const idsArrayFiltered = idsArray.filter(item => item.trim() !== '')
    return idsArrayFiltered.map((id:string, index) => {
      const idClear = id.trim()
      if(index === 0) {
        return "'" + idClear + "'"
      }
      return " '" + idClear + "'"
    })
  }

  const getValueFromJson = (value:string, key:string) => {
    const regex = /['"]?(\w+)['"]?:\s*['"]?([^'"]+)['"]?,/g;

    const valueToArray = value.split('\n').filter(Boolean).filter(line => !/\{|\}/.test(line)).map(item => item.trim());

    const filteredArray = valueToArray.map(item => {
      const matches = [...item.matchAll(regex)];
      const keyValuePairs = matches.map(match => ({ [match[1]]: match[2] }));
      return Object.assign({}, ...keyValuePairs);
    });

    const result = filteredArray.filter(obj => obj[key] !== undefined).map(obj => obj[key]);
    return result
  };

  return (
    <div className='root'>
      <Header />
      <Routes>
        <Route path='/sql-helper' element={<Main/>}/>
        <Route path="/sql-helper/in-helper" element={<InHelper convertValueInHelperFormat1={convertValueInHelperFormat1} convertValueInHelperFormat2={convertValueInHelperFormat2}/>}/>
        <Route path="/sql-helper/get-value" element={<GetValue convertValueFromKey={getValueFromJson} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
