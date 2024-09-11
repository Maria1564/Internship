import { Route, Routes } from "react-router-dom"
import Login from "./components/Login/Login"
import { useEffect, useState } from "react"
import RequireAuth from "./components/RequireAuth/RequireAuth"
import HomePage from "./components/HomePage/HomePage"
import Button from "./components/Button/Button"
// import withSuspense from "./hoc/withSuspense"


function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token) {
      setIsAuth(true)
    }
  }, [])
  console.log("isAuth", isAuth)
  // const SuspensTest = withSuspense(Test)
  return (
    <>
      <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={
            <RequireAuth isAuth={isAuth}>
                <HomePage/>
            </RequireAuth>
          }/>
      </Routes>
      <Button>Привет</Button>
    </>
  )
}

export default App
