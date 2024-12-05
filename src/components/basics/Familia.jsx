import React, { cloneElement } from "react";

const Familia = (props) => {
	const d = new Date();
	return (
		<div>
			{props.children.map((child, i) => {
				return cloneElement(child, {
					...props,
					key: d.getMilliseconds() + i.toString(),
				});
			})}
		</div>
	);
};

export default Familia;
