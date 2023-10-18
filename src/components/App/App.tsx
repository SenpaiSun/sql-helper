import './App.css'
import Header from '../Header/Header'
import InHelper from '../InHelper/InHelper'
import GetValue from '../GetValue/GetValue'
import { Routes, Route} from 'react-router-dom'

function App() {

  const convertValueInHelper = (value:string) => {
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
        <Route path="/in-helper" element={<InHelper convertInput={convertValueInHelper}/>}/>
        <Route path="/get-value" element={<GetValue/>} />
      </Routes>
    </div>
  )
}

export default App
