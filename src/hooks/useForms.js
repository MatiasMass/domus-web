import { useState } from "react"


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);
    
    const handleInputChange = ({ target }) => {
        
        console.log("target", target);

        if (target.name === "ciudad"){
            values.direccion.ciudad = target.value
        }else if (target.name === "provincia"){
            values.direccion.provincia = target.value
        }else if (target.name === "numero"){
            values.direccion.numero = target.value
        }else if (target.name === "barrio"){
            values.direccion.barrio = target.value
        }else if (target.name === "piso"){
            values.direccion.piso = target.value
        }else if (target.name === "depto"){
            values.direccion.depto = target.value
        }else if (target.name === "clientes"){
            console.log("entro");
            console.log("clientes", values.clientes);
            values.cliente.id = 1
            values.cliente.telefono = "123"
            values.cliente.correo = null
            values.cliente.nombre = ""
            values.cliente.cuil = target.value
        }

        
        setValues({
            ...values,
            [ target.name ]: target.value
        });
        
    }
    
    console.log("values", values);


    if (values.provincia){
        delete values.provincia
    }
    if (values.ciudad){
        delete values.ciudad
    }
    if (values.numero){
        delete values.numero
    }
     if (values.barrio){
        delete values.barrio
    } if (values.piso){
        delete values.piso
    } if (values.depto){
        delete values.depto
    }
    if (values.clientes){
        delete values.clientes
    }
    
    const resetForm = () =>{
        setValues(initialState)
    }

    return [ values, handleInputChange, resetForm ];

}