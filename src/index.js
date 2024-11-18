import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';

const tag = <h1>Hello world!!!</h1>

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<div>
    {tag}
</div>);

