import React from 'react'
import {Route ,Routes} from 'react-router-dom'
import Home from "./pages/home/Home";
import UserLogin from "./pages/userlogin/UserLogin";
import UserSignup from "./pages/usersignup/UserSignup";
import CaptainLogin from "./pages/captainlogin/CaptainLogin";
import CaptainSignup from "./pages/captainsignup/CaptainSignup";



const App = () => {
  return (
    <div>
         <Routes> 
  
           <Route path='/' element={<home />} />
           <Route path='/captain-login' element={<captainLogin />} />
           <Route path='/login' element={<userlogin />} />
           <Route path='/signup' element={<userSignUp />} />
           <Route path='/captain-signup' element={<captainSignup />} />

          </Routes>
          <div>App</div>
    </div>
  )
}

export default App