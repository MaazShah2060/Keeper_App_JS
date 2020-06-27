import React from 'react';

function App(props){
return <div className='note'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        </div>
}

export default App;