
import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";


import Curr from './pages/dfg/Curr';

function App() {
  return (
    <div>
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Curr/>}/>
         
      
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
