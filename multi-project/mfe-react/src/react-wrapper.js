// import React from 'react';
// import ReactDOM from 'react-dom';
// import createCustomElement from 'react-to-webcomponent';
import App from './App';

// const WebComponent = createCustomElement(App, React, ReactDOM);
// customElements.define('mfe-react', WebComponent);

import React from "react"
import ReactDOM from "react-dom/client" // if using React 18
// import ReactDOM from "react-dom" // if using React 17

import r2wc from "react-to-webcomponent"

const WebGreeting = r2wc(App, React, ReactDOM)

customElements.define("web-greeting", WebGreeting)