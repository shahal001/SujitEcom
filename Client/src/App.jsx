import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {SignupPage,LoginPage} from './Router'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/Signup' element={<SignupPage/>} />
        <Route path='/Login' element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App