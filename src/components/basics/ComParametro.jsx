import React from "react";

export default function ComParametro(props) {
  let msg = props.message;
  if (typeof props.message === "number" && props.message.length === 0) {
    msg = "Nenhum valor enviado";
  }
  return (
    <React.Fragment>
      <h2>{props.titulo}</h2>
      <p>
        Valor a seguir é um parametro: <strong>{props.subtitulo}</strong>
      </p>
      <strong>Parâmetro message: {msg}</strong>
    </React.Fragment>
  );
}
