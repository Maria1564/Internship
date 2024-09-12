import { Formik, Form } from "formik";
import Reactfrom from "react";
import { formInitialVal, schema } from "./helper";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import Input from "../Input/Input";
import Button from "../Button/Button";

type LoginProps = {
  setIsAuth: (state: boolean) => void;
};

const Login: React.FC<LoginProps> = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const handleSubmit = (values: { username: string; password: string }) => {
    console.log("values", values);
    fetch("https://dummyjson.com/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message) {
          alert("Неверный логин или пароль");
        } else {
          console.log("succes", res);
          localStorage.setItem("token", res.token);
          setIsAuth(true);
          return navigate("/home");
        }
      });
  };

  return (
    <div className="wrapper">
      <Formik
        initialValues={formInitialVal}
        validationSchema={schema}
        onSubmit={values => handleSubmit(values)}
      >
        <Form>
          <h1 className="title">Вход</h1>
          <Input
            id="inp_username"
            name="username"
            label="Имя"
            placeholder="Введите имя"
          />
          <Input
            id="inp_password"
            name="password"
            label="Пароль"
            placeholder="Введите пароль"
            type="password"
          />
          <Button>Подтвердить</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
