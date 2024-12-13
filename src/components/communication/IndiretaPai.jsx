import React from "react";
import IndiretaFilho from "./IndiretaFilho";

const DiretaPai = (props) => {
	let nomeParam = "?";
	let idadeParam = 0;
	let nerdParam = false;

	function fornecerInfomacoes(nome, idade, nerd) {
		nomeParam = nome;
		idadeParam = idade;
		nerdParam = nerd;
		console.log(nomeParam, idadeParam, nerdParam);
	}

	return (
		<div>
			<div>
				<span>{nomeParam}</span> | <span> {idadeParam}</span> |{" "}
				<span>{nerdParam ? "Verdadeiro " : "Falso "}</span>|
			</div>
			<IndiretaFilho quandoClicar={fornecerInfomacoes} />
		</div>
	);
};

export default DiretaPai;
