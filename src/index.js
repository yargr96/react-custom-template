import './styles/main.scss';
import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App/App';

const root = document.querySelector("#root");

render(
    <App />,
    root
)