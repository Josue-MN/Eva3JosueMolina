import React, {useState, useEffect} from "react";
import { Evento } from "./Interfaces/IEventos";
import { initialStateEvento } from "./constantes/InitialStates";


interface Props{
    traerEventos:(e:Evento,index:number) => void;
    eventos:Evento[];
    setEventos:React.Dispatch<React.SetStateAction<Evento[]>>
}

export const MostrarEventos = (props:Props)=>{
    const miAlmacenamineto = window.localStorage

    useEffect(()=>{
        const cargarEventos = ()=>{
            const listadoSTREventos = miAlmacenamineto.getItem("eventos")
            if(listadoSTREventos != null){
                let listado = JSON.parse(listadoSTREventos)
                props.setEventos(listado)
            }
        }

        window.addEventListener("storage",cargarEventos)

        cargarEventos();

        return () => window.removeEventListener("storage",cargarEventos)

    },[])

    const queModificar = (evento:Evento,index:number)=>{
        props.traerEventos(evento,index)
    }

    const queEliminar = (index:number)=>{
        const nuevoslistadoEventos = [...props.eventos]
        nuevoslistadoEventos.splice(index,1)
        props.setEventos(nuevoslistadoEventos)
        miAlmacenamineto.setItem("eventos",JSON.stringify(nuevoslistadoEventos))

    }

    return(
        <>
        <h1>Tabala de actualizacion de datos</h1>
        <table>
            <thead>
                <tr>
                    <th>Nombre Evento</th>
                    <th>Numero Evento</th>
                    <th>Tipo de Evento</th>
                    <th>Descripcion Evento</th>
                    <th>Fecha Inicio Evento</th>
                    <th>Fecha Termino Evento</th>
                    <th>Duracion Evento</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {props.eventos.map((e,index)=>{
                    return(
                        <tr>
                            <td>{e.nombreEvento}</td>
                            <td>{e.numeroEvento}</td>
                            <td>{e.tipoEvento}</td>
                            <td>{e.descripcionEvento}</td>
                            <td>{e.fechaIEvento}</td>
                            <td>{e.fechaTEvento}</td>
                            <td>{e.duracionEvento}</td>
                            <td>
                                <button
                                onClick={()=>queModificar(e,index)}
                                >Editar</button>
                                <button
                                onClick={()=>queEliminar(index)}
                                >Eliminar</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )

}

export default MostrarEventos