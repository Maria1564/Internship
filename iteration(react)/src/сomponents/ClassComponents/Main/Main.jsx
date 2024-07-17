import React from "react";
// import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import "./Main.css"
import HeaderJs from "../Header/HeaderJs";
import Content from "../Content/Content";

class Main extends React.Component {
   
    render() {
        return(
           <>
            {/* <Header/> */}
            <HeaderJs/>

            <NavBar/>
            
           <Content/>
           </>
        )
    }
}

export default Main