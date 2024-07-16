import React from "react";
import HeaderClass from "../HeaderClass/HeaderClass";
import NavClass from "../NavClass/NavClass";
import "./MainClass.css"
import ContentClass from "../ContentClass/ContentClass";

class MainClass extends React.Component {
   
   

    render() {
        return(
           <>
            <HeaderClass/>

            <NavClass/>
            
           <ContentClass/>
           </>
        )
    }
}

export default MainClass