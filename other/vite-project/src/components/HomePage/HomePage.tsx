import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import s from "./HomePage.module.css"
import { axiosPublic } from "../../axios/axiosPublic";

type HomePageProps = {
  setIsAuth: (state: boolean) => void;
};

const HomePage: React.FC<HomePageProps> = ({ setIsAuth }) => {
  const [nameUser, setNameUser] = useState<string>("")
  const navigate = useNavigate();

  useEffect(() => {
    axiosPublic.get("/user/me")
    .then(({data}) => {
      setNameUser(data.username)
      localStorage.setItem("idUser", data.id)
    })
  }, []);

    
  // axiosPublic.get("/carts").then(res=> console.log(res))
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("idUser");
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <div>
      <div className={s.btns}>
        <Button onClick={()=>navigate("/about-me")}>Инфа о {nameUser}</Button>
        <Button onClick={()=>navigate("/my-posts")}>Посты {nameUser}</Button>
        <Button onClick={handleLogout}>Выйти</Button>
      </div>
    </div>
  );
};

export default HomePage;
