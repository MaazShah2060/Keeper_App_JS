import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import Notes from './Notes'
import Header from "./component/Header"
import Footer from "./component/Footer"
function show(Note){
    return <App 
        id={Note.id}
        title={Note.title}
        content={Note.content}
    />
}
ReactDOM.render(<div>
<header><Header/></header>
{Notes.map(show)}
<footer><Footer/></footer>
</div>,document.getElementById('root'));