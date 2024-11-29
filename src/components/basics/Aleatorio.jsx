import React from 'react';

const getRandomNumber = (props) => {
    const { min, max } = props;
    const math = Math.random();
    const result = Math.floor(math * (max - min + 1)) + min;

    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor Mínimo: {min}</strong></p>
            <p><strong>Valor Máximo: {max}</strong></p>
            <p><strong>  Valor Seed: {math}</strong></p>
            <p><strong>Valor Gerado: {result}</strong></p>
        </div>
    );
}

export default getRandomNumber;