import React from "react";
import s from "./NewPostForm.module.css";
import Button from "../../Button/Button";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { IPost, newPost } from "../interfece";
import { axiosPublic } from "../../../axios/axiosPublic";

type NewPostFormProps = {
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
};

const NewPostForm: React.FC<NewPostFormProps> = ({ setPosts }) => {
  const { register, handleSubmit, reset } = useForm<newPost>({
    defaultValues: {
      title: "",
      text: "",
    },
  });

  const submit: SubmitHandler<newPost> = data => {
    console.log(data);
    axiosPublic
      .post("https://dummyjson.com/posts/add", {
        title: data.title,
        body: data.text,
        userId: localStorage.getItem("idUser"),
      })
      .then(({ data }) => {
        console.log(data);
        setPosts(prev => [...prev, data]);
      });
    reset({ title: "", text: "" });
  };

  const error: SubmitErrorHandler<newPost> = data => {
    console.log("errors >> ", data);
    if (data.text) {
      if (data.text.type === "required") {
        alert("Введите текст поста");
      }
    } else if (data.title) {
      if (data.title.type === "required") {
        alert("Введите название поста");
      }
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(submit, error)}>
      <input
        type="text"
        id={s.inp_title}
        placeholder="Название поста"
        {...register("title", { required: true })}
      />
      <textarea
        id={s.inp_text}
        placeholder="Ваш текст"
        cols={40}
        rows={15}
        {...register("text", { required: true })}
      />
      <Button type="submit">Создать</Button>
    </form>
  );
};

export default NewPostForm;
