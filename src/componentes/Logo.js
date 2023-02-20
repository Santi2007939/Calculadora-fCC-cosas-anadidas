import React from "react";

const Logo = (props) => {
    return(
        <div className={props.clase}>
            <img
                src={props.imagen}
                className={props.logoClase}
                alt={`Logo de ${props.nombre}`} />
        </div>
    )
};

export default Logo