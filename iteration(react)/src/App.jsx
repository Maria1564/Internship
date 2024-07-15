import './App.css'
import {Routes,Route} from "react-router-dom"
import MainClass from "./сomponents/ClassComponents/MainClass/MainClass"
function App() {

  return (
    <Routes>
      <Route path='class' element={<MainClass/>} />


      {/* <Route path='functional' element={<MainFunc/>} /> */}
    </Routes>

  )
}

export default App
