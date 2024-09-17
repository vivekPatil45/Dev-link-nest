import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalProvider } from './contextAPI.jsx'
import { ResultsProvider } from './hooks/ResultsContext.jsx'

createRoot(document.getElementById('root')).render(
  
  <ResultsProvider>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    
  </ResultsProvider>
  ,
)
