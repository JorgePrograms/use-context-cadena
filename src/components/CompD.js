import { useContext } from "react"
import CompE from "./CompE"
import { DataContext } from "../contexts/dataContext"

const CompD = () => {
    const contextData = useContext(DataContext)

    return(
        <section className="section">&lt; CompD /&gt;
        <ul>
            {contextData.pokemon.map((elem, index)=>(
            <li key={index}>{elem.id} - {elem.name}-{elem.type}</li>
           
        ))}
        </ul>
        <p>{contextData.num}</p>
        <p>{contextData.nombre}</p>
        <CompE />
        </section>
    )
}
export default CompD