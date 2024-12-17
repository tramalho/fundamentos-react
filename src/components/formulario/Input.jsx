import React from "react";
import "./Input.css";

const Input = (_) => {
	const [value, setValue] = React.useState("inicial");

	function handleChange(e) {
		setValue(e.target.value);
	}

	return (
		<div className="Input">
			<input
				type="input"
				value={value}
				onChange={handleChange}
				placeholder="onChange"
			/>
			<input type="input" value={value} readOnly placeholder="readOnly" />
			<input type="input" value={undefined} placeholder="undefined" />
			<h2>{value}</h2>
		</div>
	);
};

export default Input;
