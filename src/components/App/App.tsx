import './App.css'
import Header from '../Header/Header'
import InHelper from '../InHelper/InHelper'
import GetValue from '../GetValue/GetValue'
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


  return (
    <div className='root'>
      <Header />
      <Routes>
        <Route path="/in-helper" element={<InHelper convertValueInHelperFormat1={convertValueInHelperFormat1} convertValueInHelperFormat2={convertValueInHelperFormat2}/>}/>
        <Route path="/get-value" element={<GetValue/>} />
      </Routes>
    </div>
  )
}

export default App
