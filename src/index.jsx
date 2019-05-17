// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App />, document.getElementById('react-root'));

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt recusandae aliquid quas error sint libero commodi perferendis, reiciendis voluptatum, perspiciatis aspernatur earum officiis quasi non consequatur molestias? Quae, veritatis amet!