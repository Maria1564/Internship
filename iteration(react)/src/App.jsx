import './App.css'
import {Routes,Route, Link} from "react-router-dom"
import Main from "./сomponents/ClassComponents/Main/Main"
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={
        <>
         <Link className='link' to="/class"> Сайт из классовых компонент</Link>
        </>} />
      <Route path='/class' element={<Main/>} />


      {/* <Route path='functional' element={<MainFunc/>} /> */}
    </Routes>
      
    </>

  )
}

export default App
