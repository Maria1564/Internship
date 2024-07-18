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
         <Link className='link' to="/functional"> Сайт из функциональных компонент</Link>
        </>} />
      <Route path='/class/*' element={<Main/>} />
      <Route path='/functional' element={<h1>Скоро будет...</h1>} />
      <Route path='/*' element={<h1>ERROR 404</h1>} />


      {/* <Route path='functional' element={<MainFunc/>} /> */}
    </Routes>
      
    </>

  )
}

export default App
