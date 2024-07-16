import React from "react";
// import HeaderClass from "../HeaderClass/HeaderClass";
import NavClass from "../NavClass/NavClass";
import "./MainClass.css"
import ContentClass from "../ContentClass/ContentClass";
import HeaderClassJs from "../HeaderClass/HeaderClassJs";

class MainClass extends React.Component {
   
   

    render() {
        return(
           <>
            {/* <HeaderClass/> */}
            <HeaderClassJs/>

            <NavClass/>
            
           <ContentClass/>
           </>
        )
    }
}

export default MainClass