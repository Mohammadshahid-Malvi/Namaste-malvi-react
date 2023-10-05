import React from 'react';
import ReactDOM from 'react-dom/client'

const heading = React.createElement("h1",{
    id:"title",
    className:'heading1',
    style:{
        color:"red",
        background:"purple"
    }
},"Heading1");

const heading2 = React.createElement('h2',{
    id:"heading2"
},
"heading2 sssdsds");
const container = React.createElement("div",{
    className:"container"
},[heading,heading2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);