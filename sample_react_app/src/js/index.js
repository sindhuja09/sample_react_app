import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Person from '../component/index';
import css from '../css/style.css';
import '../css/scss/index.scss';

const root = document.getElementById('root');
ReactDOM.render(
  <Person name="sample app" />,
  root,
);
