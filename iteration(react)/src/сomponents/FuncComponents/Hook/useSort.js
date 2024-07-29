import {useEffect, useState } from "react"

export const useSort = (array = [], parameter="id") =>{
   const [sortArr, setSortArr] =  useState([])
   const copyArr = [...array]
   useEffect(()=>{
      switch(typeof copyArr[0][parameter]){
         case "string":
            setSortArr(copyArr.sort((a, b) => {
               const nameA = a[parameter].toUpperCase()
               const nameB = b[parameter].toUpperCase()
               if (nameA < nameB) return -1
               if (nameA > nameB) return 1
               return 0;
             }))
            break
   
         case "number" :
            setSortArr(copyArr.sort((a, b) => a[parameter] - b[parameter]))
      }
   }, [parameter])
   
   return sortArr
}