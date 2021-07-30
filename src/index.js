import React from 'react';
import ReactDOM from 'react-dom'; // This is from the react-dom library. it's a dependency

import './index.css';
import App from './App';


ReactDOM.render(<App />,document.getElementById('root'));
//the react allows the <App /> [jsx code], which is html to run on js.
// idg the doc.getElem stuff. I should ask about that
//Means we want to render the App.html into the root id, which is the index.html file in the public folder
