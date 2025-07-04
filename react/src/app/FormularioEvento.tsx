import React, {useEffect, useState} from "react";
import { Evento } from "./Interfaces/IEventos";
import { initialStateEvento } from "./constantes/InitialStates";

export const FormularioEvento = () =>{
    const miAlmacenamineto = window.localStorage
    const [evento, setEvento] = useState(initialStateEvento)
    const [eventos, setEventos] = useState<Evento[]>([])

    useEffect(()=>{
        let listadoSTREventos = miAlmacenamineto.getItem("eventos")
        if(listadoSTREventos != null){
            let listado = JSON.parse(listadoSTREventos)
            setEventos(listado)
        }
    },[])

    const handleEvento = (name:string,value:string) =>{
        setEvento(
            {...evento,[name]:value}
        )
    }

    const handleRegistrar = ()=>{
        const nuevoEvento = [...eventos, evento]
        setEventos(nuevoEvento)
        miAlmacenamineto.setItem("eventos", JSON.stringify(nuevoEvento))
        setEvento(initialStateEvento)
    }

    

    return(
        <>
        <h1>Formulario de registro de eventos</h1>
        <br></br>
        <label>Nombre:</label>
        <input
        name="nombreEvento"
        type="text"
        placeholder="Ingrese el Nombre del Evento"
        value={evento.nombreEvento}
        onChange={(e)=>handleEvento(e.currentTarget.name,e.currentTarget.value)}
        ></input>
        <br></br>
        <label>Numero:</label>
        <input
        name="numeroEvento"
        type="number"
        placeholder="Ingrese el Numero del Evento"
        value={evento.numeroEvento}
        onChange={(e)=>handleEvento(e.currentTarget.name,e.currentTarget.value)}
        ></input>
        <br></br>
        <label>Tipo:</label>
        <select
        name="tipoEvento"
        value={evento.tipoEvento}
        onChange={(e)=>handleEvento(e.currentTarget.name,e.currentTarget.value)}
        >
            <option value="">Elige la categoria del evento</option>
            <option value="Recaudacion">Evento de Recaudacion</option>
            <option value="Social">Evento Social</option>
            <option value="Empresa">Evento Empresarial</option>
            <option value="Reunion">Evento de Reunion</option>
            <option value="Extracurricular">Evento Extracurricular</option>
        </select>
        <br></br>
        <label>Descripcion:</label>
        <br>
        </br>
        <textarea 
        name="descripcionEvento"
        rows="5"
        cols="35"
        value={evento.descripcionEvento}
        onChange={(e)=>handleEvento(e.currentTarget.name,e.currentTarget.value)}
        ></textarea>
        <br></br>
        <label>Fecha Inicio:</label>
        <input
        name="fechaIEvento"
        type="date"
        value={evento.fechaIEvento}
        onChange={(e)=>handleEvento(e.currentTarget.name,e.currentTarget.value)}
        ></input>
        <br></br>
        <label>Fecha Termino:</label>
        <input
        name="fechaTEvento"
        type="date"
        value={evento.fechaTEvento}
        onChange={(e)=>handleEvento(e.currentTarget.name,e.currentTarget.value)}
        ></input>
        <br></br>
        <label>Duracion:</label>
        <input
        name="duracionEvento"
        type="number"
        placeholder="Ingrese las horas que duro el evento"
        value={evento.duracionEvento}
        onChange={(e)=>handleEvento(e.currentTarget.name,e.currentTarget.value)}
        ></input>
        <br></br>

        <button
        onClick={() => {handleRegistrar()}}
        >Registrar</button>
        </>
    );
}

export default FormularioEvento