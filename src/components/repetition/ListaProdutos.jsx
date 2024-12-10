import React from "react";
import produtos from "../../components/data/produtos";
import "./ListaProdutos.css";

const ListaProdutos = () => {
	const tr = produtos.map((produto) => {
		return (
			<tr key={produto.id}>
				<td>{produto.id}</td>
				<td>{produto.nome}</td>
				<td>{produto.preco}</td>
			</tr>
		);
	});
	return (
		<table className="tableProdutos">
			<thead>
				<tr className="header">
					<th>id</th>
					<th>nome</th>
					<th>preco</th>
				</tr>
			</thead>
			<tbody>{tr}</tbody>
		</table>
	);
};

export default ListaProdutos;
