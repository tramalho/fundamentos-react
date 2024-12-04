import React, { cloneElement } from "react";

const Familia = (props) => {
	return (
		<div>
			{props.children.map((child, i) => {
				return cloneElement(child, { ...props, key: child.props.key });
			})}
		</div>
	);
};

export default Familia;
