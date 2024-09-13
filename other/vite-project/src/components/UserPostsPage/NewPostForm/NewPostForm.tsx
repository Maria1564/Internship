import React from "react";
import s from "./NewPostForm.module.css";
import Button from "../../Button/Button";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

const NewPostForm: React.FC = () => {
  const { register, handleSubmit } = useForm<{ text: string }>({
    defaultValues: {
      text: "",
    },
  });

  const submit: SubmitHandler<{ text: string }> = data => {
    console.log(data);
  };

  const error: SubmitErrorHandler<{ text: string }> = data => {
    console.log("errors >> ", data)
     if(data.text){
        if(data.text.type === "required"){
          alert("Введите текст поста")
        }
     }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(submit, error)}>
      <textarea
        id={s.inp_text}
        placeholder="Ваш текст"
        {...register("text", { required: true})}
      />
      <Button type="submit">Создать</Button>
    </form>
  );
};

export default NewPostForm;
