import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import Button from "../../Button/Button";
import s from "../NewPostForm/NewPostForm.module.css"
import { IPost } from "../interfece";
import { axiosPublic } from "../../../axios/axiosPublic";

type NewPostFormikProps = {
    setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
  };

const NewPostFormik:React.FC<NewPostFormikProps> = ({setPosts}) => {
  const formik = useFormik({
    initialValues: {
        title: "",
        text: "",
    },
    onSubmit: values => {
        axiosPublic
        .post("https://dummyjson.com/posts/add", {
          title: values.title,
          body: values.text,
          userId: localStorage.getItem("idUser"),
        })
        .then(({ data }) => {
          console.log(data);
          setPosts(prev => [...prev, data]);
        });
        formik.resetForm()
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Введите название поста"),
      text: Yup.string().required("Введите текст поста"),
    }),
  });
  return (
    <form action="" className={s.form} onSubmit={formik.handleSubmit}>
        <input
        type="title"
        id={s.inp_title}
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
        placeholder="Название поста"
      />
      {formik.errors.title && formik.touched.title && (
        <div className={s.error_message}>{formik.errors.title}</div>
      )}
      <textarea
        id={s.inp_text}
        placeholder="Ваш текст"
        cols={40}
        rows={15}
        name="text"
        value={formik.values.text}
        onChange={formik.handleChange}
      />
      {formik.errors.text && formik.touched.text && (
        <div className={s.error_message}>{formik.errors.text}</div>
      )}
      <Button type="submit">Создать</Button>
    </form>
  );
};

export default NewPostFormik;
