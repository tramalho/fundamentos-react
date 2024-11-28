import React from "react";
import "./index.css";
import Comp01 from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";
import Fragmento from "./components/basics/Fragmento";

const tag = <h1>Hello world!!!</h1>;

const App = (_) => (
	<div id="app">
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
