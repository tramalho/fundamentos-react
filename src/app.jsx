import React from "react";
import "./index.css";
import Comp01 from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/layout/Card";

const tag = <strong>Hello world!!!</strong>;

const App = (_) => (
	<div id="app">
		<h1>Fundamentos React</h1>
		<Card title="#04 - Aleatório">
			<Aleatorio min={1} max={60} />
		</Card>
		<Card title="#03 - Fragmento">
			<Fragmento />
		</Card>
		<Card title="#02 - Com Parâmetro">
			<ComParametro titulo="Situação do Aluno" subtitulo="Nota" message={9.3} />
		</Card>
		<Card title="#02 - Com Parametro 2">
			<ComParametro
				titulo="Reuso do Componente"
				subtitulo="Componente com parâmetros"
				message={1234567890}
			/>
		</Card>
		<Card title="#01 - Primeiro Componente">
			<Comp01 />
		</Card>
		<Card title="#01 - Tag">{tag}</Card>
	</div>
);

export default App;