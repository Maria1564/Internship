import { Route, Routes } from "react-router-dom"
import Login from "./components/Login/Login"
import { useEffect, useState } from "react"
import RequireAuth from "./components/RequireAuth/RequireAuth"
import HomePage from "./components/HomePage/HomePage"
// import withSuspense from "./hoc/withSuspense"


function App() {
  const [isAuth, setIsAuth] = useState<boolean>(true)
  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token) {
      setIsAuth(true)
    }else {
      setIsAuth(false)
    }
  }, [isAuth])
  // const SuspensTest = withSuspense(Test)
  return (
    <>
      <Routes>
          <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
          <Route path="/" element={
            <RequireAuth isAuth={isAuth}>
                <HomePage setIsAuth={setIsAuth}/>
            </RequireAuth>
          }/>
      </Routes>
    </>
  )
}

export default App
