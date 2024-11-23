import Login from "../src/pages/login/Login"
import SignUp from "../src/pages/signup/SignUp"
import Home from "./pages/home/Home"
import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext"
import { Navigate } from "react-router-dom"




function App() {
 const {authUser} = useAuthContext()

  return (
   <div className="p-4 h-screen flex items-center justify-center  ">
    <Routes>
      <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
      <Route path="/login" element={authUser ? <Navigate to='/' /> :<Login />} />
      <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
    </Routes>
    <Toaster/>
   </div>
  )
}

export default App
