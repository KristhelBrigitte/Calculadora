import React from "react";
import '../estilos/botonLimpiar.css';

const BotonLimpiar=(props)=>(

    <div className='boton-limpiar'>
        {props.children}
    </div>
);

export default BotonLimpiar;