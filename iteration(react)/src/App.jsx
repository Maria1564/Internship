import './App.css'
import {Routes,Route, Link} from "react-router-dom"
import MainClass from "./сomponents/ClassComponents/MainClass/MainClass"
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={
        <>
         <Link className='link' to="/class"> Сайт из классовых компонент</Link>
        </>} />
      <Route path='/class' element={<MainClass/>} />


      {/* <Route path='functional' element={<MainFunc/>} /> */}
    </Routes>
      
    </>

  )
}

export default App
