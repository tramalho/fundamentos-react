import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import Comp01 from './components/basics/Primeiro';

const tag = <h1>Hello world!!!</h1>

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<div>
    {tag}
    <h2>{<Comp01 />}</h2>
</div>);

