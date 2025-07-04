'use client'
import { useEffect,useState } from "react"
import { FormularioEvento } from "./FormularioEvento"
import { FormularioEventoActualizar } from "./FormularioEventoActualizar"

export default function Home() {


  return(
  <>
  <FormularioEvento/>
  <FormularioEventoActualizar/>
  </>
  )
}
