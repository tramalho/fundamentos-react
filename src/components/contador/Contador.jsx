import React, { Component } from "react";
import "./Contador.css";

class Contador extends Component {
	state = {
		numero: this.props.numeroInicial || 0,
		passo: this.props.passoInicial || 5,
	};

	inc = () => {
		this.setState({
			numero: this.state.numero + this.state.passo,
		});
	};

	dec = () => {
		this.setState({
			numero: this.state.numero - this.state.passo,
		});
	};

	setPasso = (evento) => {
		this.setState({
			passo: Number.parseInt(evento.target.value),
		});
	};

	render() {
		return (
			<div className="Contador">
				<h2>Contador</h2>
				<h3>{this.state.numero}</h3>
				<div>
					<label htmlFor="passoInput">Passo: </label>
					<input
						type="number"
						value={this.state.passo}
						onChange={this.setPasso}
					/>
				</div>
				<button type="button" onClick={this.dec}>
					-
				</button>
				<button type="button" onClick={this.inc}>
					+
				</button>
			</div>
		);
	}
}

export default Contador;
