import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { Main } from '@pages/Main/Main'
import { InHelper } from '@pages/InHelper/InHelper'
import { CompareText } from '@pages/CompareText/CompareText'
import { GraylogConverter } from '@pages/GraylogConverter/GraylogConverter'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/sql-helper' element={<Layout />}>
      <Route path='/sql-helper' element={<Main />} />
      <Route path='/sql-helper/in-helper' element={<InHelper />} />
      <Route path='/sql-helper/compare-text' element={<CompareText />} />
      <Route path="/sql-helper/graylog-converter" element={<GraylogConverter />}></Route>
    </Route>
  )
)
