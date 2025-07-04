import React, {useEffect, useState} from "react";
import { Evento } from "./Interfaces/IEventos";
import { initialStateEvento } from "./constantes/InitialStates";
import MostrarEventos from "./MostrarEventos"

export const FormularioEventoActualizar = () =>{
    const miAlmacenamineto = window.localStorage
    const [evento, setEvento] = useState(initialStateEvento)
    const [eventos, setEventos] = useState<Evento[]>([])
    const [eventoE, setEventoE] = useState(initialStateEvento)
    const [indexEvento, setindexEvento] = useState(Number)


    useEffect(() => {
        const listadoSTREventos = miAlmacenamineto.getItem("eventos");
        if (listadoSTREventos != null) {
            const listado = JSON.parse(listadoSTREventos);
            setEventos(listado);
        }
    },[]);


    const handleEvento = (name:string,value:string)=>{
        setEvento(
            {...evento,[name]:value}
        )

    }

    const handleActualizar = (indexUsado:number,EventoActualizado:Evento)=>{
        const eventoActualizado = [...eventos]
        eventoActualizado[indexUsado] = EventoActualizado
        setEventos(eventoActualizado)
        miAlmacenamineto.setItem("eventos",JSON.stringify(eventoActualizado))
    }

    const traerEventos = (e:Evento,index:number)=>{
        setEventoE(e)
        setindexEvento(index)
    }

    return(
        <>
        
        <MostrarEventos traerEventos={traerEventos} eventos={eventos} setEventos={setEventos}/>
        <h1>Formulario de actualizacion de eventos</h1>
        <br></br>
        <label>Nombre:</label>
        <input
        name="nombreEvento"
        type="text"
        placeholder="Ingrese el Nombre del Evento"
        value={eventoE.nombreEvento}
        onChange={(e)=>setEventoE({...eventoE,nombreEvento:e.currentTarget.value})}
        ></input>
        <br></br>
        <label>Numero:</label>
        <input
        name="numeroEvento"
        type="number"
        placeholder="Ingrese el Numero del Evento"
        value={eventoE.numeroEvento}
        onChange={(e)=>setEventoE({...eventoE,numeroEvento:String(e.currentTarget.value)})}
        ></input>
        <br></br>
        <label>Tipo:</label>
        <select
        name="tipoEvento"
        value={eventoE.tipoEvento}
        onChange={(e)=>setEventoE({...eventoE,tipoEvento:e.currentTarget.value})}
        >
            <option value="">Elige la nueva categoria del evento</option>
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
        value={eventoE.descripcionEvento}
        onChange={(e)=>setEventoE({...eventoE,descripcionEvento:e.currentTarget.value})}
        ></textarea>
        <br></br>
        <label>Fecha Inicio:</label>
        <input
        name="fechaIEvento"
        type="date"
        value={eventoE.fechaIEvento}
        onChange={(e=>setEventoE({...eventoE,fechaIEvento:e.currentTarget.value}))}
        ></input>
        <br></br>
        <label>Fecha Termino:</label>
        <input
        name="fechaTEvento"
        type="date"
        value={eventoE.fechaTEvento}
        onChange={(e=>setEventoE({...eventoE,fechaTEvento:e.currentTarget.value}))}
        ></input>
        <br></br>
        <label>Duracion:</label>
        <input
        name="duracionEvento"
        type="number"
        placeholder="Ingrese las horas que duro el evento"
        value={eventoE.duracionEvento}
        onChange={(e)=>setEventoE({...eventoE,duracionEvento:String(e.currentTarget.value)})}
        ></input>
        <br></br>

        <button
        onClick={() => {handleActualizar(indexEvento,eventoE)}}
        >Actualizar</button>
        </>
    );
}

export default FormularioEventoActualizar