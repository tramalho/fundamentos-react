import React from "react";
import "./index.css";
import Comp01 from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/layout/Card";
import "./App.css";
const tag = <strong>Hello world!!!</strong>;

const App = (_) => (
	<div className="App">
		<h1>Fundamentos React</h1>
		<div className="Cards">
			<Card title="#04 - Aleatório" color="#F7887D">
				<Aleatorio min={1} max={60} />
			</Card>
			<Card title="#03 - Fragmento" color="#F6877E">
				<Fragmento />
			</Card>
			<Card title="#02 - Com Parâmetro" color="#F6857E">
				<ComParametro
					titulo="Situação do Aluno"
					subtitulo="Nota"
					message={9.3}
				/>
			</Card>
			<Card title="#02 - Com Parametro 2" color="#F6837F">
				<ComParametro
					titulo="Reuso do Componente"
					subtitulo="Componente com parâmetros"
					message={1234567890}
				/>
			</Card>
			<Card title="#01 - Primeiro Componente" color="#F6827F">
				<Comp01 />
			</Card>
			<Card title="#01 - Tag" color="#F68080">{tag}</Card>
		</div>
	</div>
);

export default App;
