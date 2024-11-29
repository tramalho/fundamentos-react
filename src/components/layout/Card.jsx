import React from "react";
import "./Card.css";

const Card = (props) => {
	return (
		<div className="Card">            
            <details>
                <summary> <h2>{props.title}</h2> </summary>
                <div className="Content">
                    {props.children}
                </div>
            </details>
		</div>
	);
};

export default Card;
