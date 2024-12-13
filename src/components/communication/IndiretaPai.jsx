import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = (props) => {
	const [nome, setNome] = useState("?");
	const [idade, setIdade] = useState(0);
	const [bool, setBool] = useState(false);

	function fornecerInfomacoes(nome, idade, nerd) {
		setNome(nome);
		setIdade(idade);
		setBool(nerd);
	}

	return (
		<div>
			<div>
				<span>{nome}</span> | <span> {idade}</span> |{" "}
				<span>{bool ? "Verdadeiro " : "Falso "}</span>|
			</div>
			<IndiretaFilho quandoClicar={fornecerInfomacoes} />
		</div>
	);
};

export default IndiretaPai;
