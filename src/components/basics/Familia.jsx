import React from "react";
import FamiliaMembro from "./FamiliaMembro";

const Familia = (props) => {
    return (
        <div>
            <FamiliaMembro nome="Nome Sem SobreNome"/>
            <FamiliaMembro nome="Nome com {props.sobrenome}" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Nome com{...props}" {...props}/>
        </div>
    );
}

export default Familia;