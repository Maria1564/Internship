import * as yup from "yup"

interface IForm {
    username: string,
    password: string
}

export const formInitialVal: IForm = {
    username: "",
    password: ""
}

export const schema = yup.object().shape({
    username: yup.string().min(2, "Имя должно содержать не менее 2 букв").required("Введите имя"),
    password: yup.string().min(5, "Пароль должен содержать не менее 5 символов").required("Введите пароль")
})