import React from "react";

const ParOuImpar = (props) => {
	const isPar = props.numero % 2 === 0;
	return (
		<>
			<p>
				O número <strong>{props.numero}</strong> é:{" "}
				<strong>{isPar ? "par" : "impar"}</strong>
			</p>
		</>
	);
};

export default ParOuImpar;
