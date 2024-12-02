import React from "react";
import "./Card.css";

const Card = (props) => {
	return (
		<div className="Card">            
                <div className="Title"><h2>{props.title}</h2></div>
                <div className="Content">
                    {props.children}
                </div>
		</div>
	);
};

export default Card;
