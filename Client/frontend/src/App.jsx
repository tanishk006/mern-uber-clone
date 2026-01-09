import React from 'react'
import {Route ,Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>
         <Routes> 
  
           <Route path='/' element={<home />} />
           <Route path='/login' element={<captainLogin />} />
           <Route path='/login' element={<userlogin />} />
           <Route path='/signup' element={<userSignUp />} />
           <Route path='/signup' element={<captainSignup />} />

          </Routes>
    </div>
  )
}

export default App