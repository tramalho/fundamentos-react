import React from "react";

const IndiretaFilho = (props) => {
	const idade = Number.parseInt(Math.floor(Math.random() * 45)) + 50;
	const bool = idade % 2 === 0;
	const nome = bool ? "João" : "Pedro";

	const btnAction = props.quandoClicar;

	return (
		<div>
			<p>Filho</p>
			<button
				type="button"
				onClick={(_) => {
					btnAction(nome, idade, bool);
				}}
			>
				Fornecer Informações
			</button>
		</div>
	);
};

export default IndiretaFilho;
