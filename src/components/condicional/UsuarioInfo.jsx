import React from "react";
import { Se, Senao } from "./If";

const UsuarioInfo = (props) => {
	console.log("props.usuario?.nome", props.usuario?.nome);
	return (
		<div>
			<Se test={props.usuario?.nome}>
				Seja bem vindo <strong>{props.usuario?.nome}</strong>!
				<br />
				<Senao>
					Seja bem vindo <strong>Anônimo</strong>!
					<br />
				</Senao>
			</Se>
		</div>
	);
};

export default UsuarioInfo;
