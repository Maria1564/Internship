import './App.css'
import {Routes,Route, Link, Navigate} from "react-router-dom"
import Main from "./сomponents/ClassComponents/Main/Main"
import Layout from './сomponents/FuncComponents/Layout/Layout'
import Home from './сomponents/FuncComponents/Home/Home'
import AnimalCatalog from './сomponents/FuncComponents/AnimalCatalog/AnimalCatalog'
import Contacts from './сomponents/FuncComponents/Contacts/Contacts'
import Header from './сomponents/FuncComponents/Header/Header'
import NavBar from './сomponents/FuncComponents/Navbar/NavBar'


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

      <Route path='/functional' 
      element={
      <Layout>
        <Header />
        <NavBar />
      </Layout>}>
        <Route index element={<Navigate to="home"/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path='ourPets' element={<AnimalCatalog/>}/>
        <Route path="contacts" element={<Contacts/>} />
      </Route>
      <Route path='/*' element={<h1>ERROR 404</h1>} />
    </Routes>
      
    </>

  )
}

export default App
