import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import Comp01 from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";

const tag = <h1>Hello world!!!</h1>;

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <div>
    {tag}
    {<Comp01 />}
    <ComParametro titulo="Segundo Componente" subtitulo="Subtitulo" />
    <ComParametro
      titulo="Reuso do Componente"
      subtitulo="Componente com parâmetros"
      message={1234567890}
    />
  </div>
);
