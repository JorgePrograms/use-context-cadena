
import { useContext } from "react";
import CompD from "./CompD";
import { DataContext } from "../contexts/dataContext";

const CompC = ()=>{
    const ListaContext= useContext(DataContext)
return(
    <section className="section">&lt; CompC /&gt;
        
        <div>{ListaContext.pokemon.map((elem)=>(
           <div key={elem.id}>
            <p>{elem.id}</p>
            <p>{elem.name}</p>
            

           </div>
          
       
        ))}</div>
        <CompD />
    </section>
)
}

export default CompC;