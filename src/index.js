import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
// basename="template_react"
ReactDOM.render(
	<BrowserRouter basename="/Template_Deme_App">
		<App />
	</BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
