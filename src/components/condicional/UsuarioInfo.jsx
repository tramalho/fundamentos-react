import React from "react";
import If from "./if";

const UsuarioInfo = (props) => {
	return (
		<div>
			<If test={props.usuario?.nome}>
				Seja bem vindo <strong>{props.usuario.nome}</strong>!
				<br />
			</If>
			<If test={props.usuario?.nome}>
				Seja bem vindo <strong>Anônimo</strong>!
			</If>
		</div>
	);
};

export default UsuarioInfo;
