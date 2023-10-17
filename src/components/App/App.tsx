import './App.css'
import Header from '../Header/Header'
import InHelper from '../InHelper/InHelper'
import GetValue from '../GetValue/GetValue'
import { Routes, Route} from 'react-router-dom'

function App() {

  const convertValueInHelper = () => {
    
  }

  return (
    <div className='root'>
      <Header />
      <Routes>
        <Route path="/in-helper" element={<InHelper />}/>
        <Route path="/get-value" element={<GetValue/>} />
      </Routes>
    </div>
  )
}

export default App
