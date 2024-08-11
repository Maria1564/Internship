import {useEffect, useState } from "react"

export const useSort = <T extends object, U extends keyof T>(array: T[], parameter:U): T[]=>{
   const [sortArr, setSortArr] =  useState<T[]>([])
   const copyArr = [...array]
   useEffect(()=>{
      switch(typeof copyArr[0][parameter]){
         case "string":
            setSortArr(copyArr.sort((a, b) => {
               const nameA = (a[parameter] as  string).toUpperCase()
               const nameB = (b[parameter] as string).toUpperCase()
               if (nameA < nameB) return -1
               if (nameA > nameB) return 1
               return 0;
             }))
            break
   
         case "number" :
            setSortArr(copyArr.sort((a, b) => (a[parameter] as number) - (b[parameter] as number)))
            break
      }
   }, [parameter])
   
   return sortArr
}