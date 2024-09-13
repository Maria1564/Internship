import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

import { axiosPublic } from "../../axios/axiosPublic";

type HomePageProps = {
  setIsAuth: (state: boolean) => void;
};

const HomePage: React.FC<HomePageProps> = ({ setIsAuth }) => {
  const [nameUser, setNameUser] = useState<string>("")
  const navigate = useNavigate();

  useEffect(() => {
    axiosPublic.get("/user/me")
    .then(({data}) => setNameUser(data.username))
  }, []);

    
  // axiosPublic.get("/carts").then(res=> console.log(res))
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <div>
      <Button onClick={()=>navigate("/about-me")}>Инфа о {nameUser}</Button>
      <Button onClick={handleLogout}>Выйти</Button>
    </div>
  );
};

export default HomePage;
