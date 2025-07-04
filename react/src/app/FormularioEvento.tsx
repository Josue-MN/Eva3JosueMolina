import React, {useEffect, useState} from "react";
import { Evento } from "./Interfaces/IEventos";

export const FormularioEvento = () =>{
    return(
        <>
        <h1>Formulario de registro de eventos</h1>
        <br></br>
        <label>Nombre:</label>
        <input
        name="nombreEvento"
        type="text"
        placeholder="Ingrese el Nombre del Evenrto"
        ></input>
        <br></br>
        <label>Numero:</label>
        <input
        name="numeroEvento"
        type="number"
        placeholder="Ingrese el Numero del Evento"
        ></input>
        <br></br>
        <label>Tipo:</label>
        <select>
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
        ></textarea>
        <br></br>
        <label>Fecha Inicio:</label>
        <input
        name="fechaIEvento"
        type="date"
        ></input>
        <br></br>
        <label>Fecha Termino:</label>
        <input
        name="fechaTEvento"
        type="date"
        ></input>
        <br></br>
        <label>Duracion:</label>
        <input
        name="duracionEvento"
        type="number"
        placeholder="Ingrese las horas que duro el evento"
        ></input>
        <br></br>

        <button>Registrar</button>
        </>
    );
}