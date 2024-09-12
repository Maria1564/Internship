import React, { useEffect, useState } from "react";

const HomePage: React.FC = () => {
  const [infoUser, setInfoUser] = useState<{ image: string } | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("https://dummyjson.com/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(res => setInfoUser({ image: res.image }));
  }, []);

  return (
    <div>
      <img src={infoUser?.image} alt="" />
    </div>
  );
};

export default HomePage;
