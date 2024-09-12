import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

type HomePageProps = {
  setIsAuth: (state: boolean) => void;
};

const HomePage: React.FC<HomePageProps> = ({ setIsAuth }) => {
  const [infoUser, setInfoUser] = useState<{ image: string } | null>(null);

  const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   fetch("https://dummyjson.com/user/me", {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       //Отправка refresh token
  //       if (res?.message) {
  //         const refreshToken = localStorage.getItem("refreshToken");
  //         fetch("https://dummyjson.com/auth/refresh", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             refreshToken: refreshToken,
  //             expiresInMins: 20, // optional, defaults to 60
  //           }),
  //         })
  //           .then(res => res.json())
  //           .then(res => {
  //             if (res?.message) {
  //               console.log("error >> ", res.message);
  //               localStorage.removeItem("token");
  //               localStorage.removeItem("refreshToken");
  //               setIsAuth(false);
  //               navigate("/login");
  //             }

  //             console.log("(fetch refresh token)res >> ", res )

  //             localStorage.setItem("token", res.token)
  //             localStorage.setItem("refreshToken", res.refreshToken)
  //             fetch("https://dummyjson.com/user/me", {
  //               method: "GET",
  //               headers: {
  //                 Authorization: `Bearer ${res.token}`,
  //               },
  //             }).then(res => res.json())
  //               .then(res => setInfoUser({ image: res.image }))
  //           });
  //       }
  //       setInfoUser({ image: res.image });
  //     });
  // }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <div>
      <img src={infoUser?.image} alt="" />
      <h2>{}</h2>
      <Button onClick={handleLogout}>Выйти</Button>
    </div>
  );
};

export default HomePage;
