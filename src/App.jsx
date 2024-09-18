import { BrowserRouter, Route, Routes } from 'react-router-dom'

import GeneralLayout from './components/layout/GeneralLayout'
import Home from './pages/Home'
import Category from './pages/Category'
import Subcategory from './pages/Subcategory'
import Saved from './pages/Saved'

function App() {
  

  return (
      <BrowserRouter>
        <GeneralLayout>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<Home/>}/>
            <Route path="/:category" element={<Category />} /> 
            <Route path="/:category/*" element={<Subcategory />} /> 
            <Route path="/saved" element={<Saved />} />

          </Routes>
        </GeneralLayout>
      </BrowserRouter>
  )
}

export default App
