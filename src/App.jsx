import { BrowserRouter, Route, Routes } from 'react-router-dom'

import GeneralLayout from './components/layout/GeneralLayout'
import Home from './pages/Home'

function App() {
  

  return (
      <BrowserRouter>
        <GeneralLayout>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </GeneralLayout>
      </BrowserRouter>
  )
}

export default App
