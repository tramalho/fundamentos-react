import React from "react";
import "./index.css";
import Comp01 from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";

const tag = <h1>Hello world!!!</h1>;

const App = (_) => (
	<div id="app">
		<h1>Desafio Números Aleatórios</h1>
		<p>Número gerado:  <strong><Aleatorio min={1} max={60} /></strong></p>
		<h1>Fundamentos React</h1>
		<Fragmento />
		<ComParametro titulo="Segundo Componente" subtitulo="Subtitulo" />
		<ComParametro
			titulo="Reuso do Componente"
			subtitulo="Componente com parâmetros"
			message={1234567890}
		/>
		{<Comp01 />}
		{tag}
	</div>
);

export default App;
