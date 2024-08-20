import './App.css'
import {Routes,Route, Link, Navigate} from "react-router-dom"
import Main from "./сomponents/ClassComponents/Main/Main"
import Layout from './сomponents/FuncComponents/Layout/Layout'
import Home from './сomponents/FuncComponents/Home/Home'
import AnimalCatalog from './сomponents/FuncComponents/AnimalCatalog/AnimalCatalog'
import Contacts from './сomponents/FuncComponents/Contacts/Contacts'
import Header from './сomponents/FuncComponents/Header/Header'
import NavBar from './сomponents/FuncComponents/Navbar/NavBar'
import ListRepositories from './api/components/ListRepositories'
import { useCallback, useState } from 'react'
import { ContextType } from "./interfaces/index";
import { Context } from "./context.ts";


function App() {
  const [idActiveDog, setIdActiveDog] = useState<number>(2)

const selectIdDog = useCallback( (idDog: number) : void => {
  setIdActiveDog(idDog)
}, [])

const value: ContextType = {
  listDogs: [
    {
      id: 1,
      name: "Тигрик",
      age: "2 года",
    },
    {
      id: 2,
      name: "Джессика",
      age: "5 месяцев",
    },
    {
      id: 3,
      name: "Рекс",
      age: "1 год",
    },
    {
      id: 4,
      name: "Чауст",
      age: "3.5 года",
    },
  ],
  idActiveDog,
  selectIdActiveDog: selectIdDog
}
  return (
    <>
    <Context.Provider value={value}>
      <Routes>
        <Route path='/' element={
          <>
          <Link className='link' to="/class"> Сайт из классовых компонент</Link>
          <Link className='link' to="/functional"> Сайт из функциональных компонент</Link>
          <Link className='link' to="/apiGitHub">API</Link>
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

        <Route path='/apiGitHub' element={<ListRepositories/>}/>    
          
        <Route path='/*' element={<h1>ERROR 404</h1>} />
      </Routes>
    </Context.Provider>
      
    </>

  )
}

export default App
