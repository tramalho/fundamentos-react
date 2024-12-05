import React from "react";
import alunos from "../../components/data/alunos";

const ListaAlunos = () => {
	const li = alunos.map((aluno) => {
		return (
			<li key={aluno.id} style={{ listStyle: "none" }}>
				{aluno.id}) {aluno.nome} -&gt; {aluno.nota}
			</li>
		);
	});
	return (
		<div>
			<ul>{li}</ul>
		</div>
	);
};

export default ListaAlunos;
