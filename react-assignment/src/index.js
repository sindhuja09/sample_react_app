
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './component/header';
import Section from './component/inner';
import Last from './component/last';
import css from './css/style.css';

const root = document.getElementById('root');
ReactDOM.render(
    <div>
<Nav/>
<Section/>
<Last/>
</div>,
root
);

