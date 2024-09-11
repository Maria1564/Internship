import { Formik, Form } from 'formik'
import React from 'react'
import { formInitialVal, schema } from './helper'
// import { useNavigate } from 'react-router-dom'
import "./Login.css"
import Input from '../Input/Input'
import Button from '../Button/Button'


const Login: React.FC = () => {
    // const navigate = useNavigate()
  return (
    <div className="wrapper">
    <Formik
        initialValues={formInitialVal}
        validationSchema={schema}
        onSubmit={()=>console.log("Submit")}
        >
        <Form>
            <h1 className='title'>Вход</h1>   
            <Input id="inp_username" name='username' label='Имя' placeholder='Введите имя'/>
            <Input id= "inp_password" name='password' label='Пароль' placeholder='Введите пароль' type="password"/>
            <Button>Подтвердить</Button>
        </Form>
    </Formik>
    </div>
  )
}

export default Login