import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { Main } from '@pages/Main/Main'
import { InHelper } from '@pages/InHelper/InHelper'
import { CompareText } from '@pages/CompareText/CompareText'
import { GraylogConverter } from '@pages/GraylogConverter/GraylogConverter'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Main />} />
      <Route path='/in-helper' element={<InHelper />} />
      <Route path='/compare-text' element={<CompareText />} />
      <Route path="/graylog-converter" element={<GraylogConverter />}></Route>
    </Route>
  )
)
