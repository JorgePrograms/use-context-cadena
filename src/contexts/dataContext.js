import { createContext, useState } from "react";


export const DataContext = createContext();

export const DataProvider = (props) =>{
    const [datos, setDatos]=useState({
        pokemon:[{id:3, name:"squartul", type:"agua"},
        {id:1,name:"bulbasur",type:"hierva"},
        {id:51,name:"newtoh",type:"psiquico"}],
        num:5,nombre:"Juan Carlos"
    })
return(

    <DataContext.Provider value={datos}>{props.children}</DataContext.Provider>
)
}


