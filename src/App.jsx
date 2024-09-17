import { BrowserRouter, Route, Routes } from 'react-router-dom'

import GeneralLayout from './components/layout/GeneralLayout'
import Home from './pages/Home'
import Category from './pages/Category'
import Subcategory from './pages/Subcategory'

function App() {
  

  return (
      <BrowserRouter>
        <GeneralLayout>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<Home/>}/>
            <Route path="/:category" element={<Category />} />  {/* Category route */}
            <Route path="/:category/*" element={<Subcategory />} />  Subcategory routes

          </Routes>
        </GeneralLayout>
      </BrowserRouter>
  )
}

export default App
