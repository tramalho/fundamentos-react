import React from "react";

const IndiretaFilho = (props) => {
	const btnAction = props.quandoClicar;
	return (
		<div>
			<p>Filho</p>
			<button
				type="button"
				onClick={(_) => {
					btnAction("João", 53, true);
				}}
			>
				Fornecer Informações
			</button>
		</div>
	);
};

export default IndiretaFilho;
