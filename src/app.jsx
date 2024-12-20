import React from "react";
import "./index.css";
import Comp01 from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/layout/Card";
import "./App.css";
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import ListaAlunos from "./components/repetition/ListaAlunos";
import ListaProdutos from "./components/repetition/ListaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/communication/DiretaPai";
import IndiretaPai from "./components/communication/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";

const tag = <strong>Hello world!!!</strong>;

const App = (_) => (
	<div className="App">
		<h1>Fundamentos React</h1>
		<div className="Cards">
			<Card title="#12 - Contador" color="#F79678">
				<Contador />
			</Card>
			<Card title="#11 - Componente Controlado (Input)" color="#F79479">
				<Input />
			</Card>
			<Card title="#10 - Comunicação Indireta" color="#F79379">
				<IndiretaPai />
			</Card>
			<Card title="#09 - Comunicação Direta" color="#F7917A">
				<DiretaPai />
			</Card>

			<Card title="#08 - Renderização Condicional #01" color="#F78F7A">
				<ParOuImpar numero={21} />
				<UsuarioInfo usuario={{ nome: "From App.jsx" }} />
				<UsuarioInfo usuario={{ sobrenome: "Abacaxi" }} />
			</Card>
			<Card title="#07 - Desafio Repetição" color="#F78E7B">
				<ListaProdutos />
			</Card>
			<Card title="#06 -  Repetição" color="#F78C7C">
				<ListaAlunos />
			</Card>
			<Card title="#05 - Comp c/ Filhos" color="#F78A7C">
				<Familia sobrenome={"Outro Sobrenome"}>
					<FamiliaMembro nome="Nome 01" />
					<FamiliaMembro nome="Nome 02" />
					<FamiliaMembro nome="Nome 03" />
				</Familia>
			</Card>
			<Card title="#04 - Aleatório" color="#F7887D">
				<Aleatorio min={1} max={60} />
			</Card>
			<Card title="#03 - Fragmento" color="#F6877E">
				<Fragmento />
			</Card>
			<Card title="#02 - C/ Parâmetro" color="#F6857E">
				<ComParametro
					titulo="Situação do Aluno"
					subtitulo="Nota"
					message={9.3}
				/>
			</Card>
			<Card title="#02 - C/ Parâmetro 2" color="#F6837F">
				<ComParametro
					titulo="Reuso do Componente"
					subtitulo="Componente com parâmetros"
					message={1234567890}
				/>
			</Card>
			<Card title="#01 - Pri Componente" color="#F6827F">
				<Comp01 />
			</Card>
			<Card title="#01 - Tag" color="#F68080">
				{tag}
			</Card>
		</div>
	</div>
);

export default App;
