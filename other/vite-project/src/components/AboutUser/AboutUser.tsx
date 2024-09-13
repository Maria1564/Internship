import React, { useEffect, useState } from "react";
import { axiosPublic } from "../../axios/axiosPublic";

const AboutUser: React.FC = () => {
    const [infoUser, setInfoUser] = useState<{image:string, firstName: string, email: string} | null>(null)
  useEffect(() => {
     axiosPublic.get("/user/me")
     .then(({data})=>  setInfoUser({image: data.image, firstName: data.firstName, email: data.email}))
  }, []);
  return <div>
    {infoUser && 
        <>
            <img src={infoUser.image} alt="" />
            <h1>{infoUser.firstName}</h1>
            <h2>{infoUser.email}</h2>
        </>
    }
  </div>;
};

export default AboutUser;
