
/*----------------------------------------------------------------------Exercise 0
import * as React from 'react';
import * as ReactDOM from 'react-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <p>
    Hello, <strong>JSX</strong>
  </p>
);

//-----------------------------------------------------------------------Ex 0.1

import * as React from 'react';
import * as ReactDOM from 'react-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <button/>
    <code/>
    <input/>
    <label/>
    <p/>
    <pre/>
    <select/>
    <table/>
    <ul/>
  </div>
);


//---------------------------------------------------------------------Ex 0.2
import * as React from 'react';
import * as ReactDOM from 'react-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <section>
    <header>
      <h1>A Header</h1>
    </header>
    <nav>
      <a href='item'>Nav Item</a>
    </nav>
    <main>
      <p>The main content...</p>
    </main>
    <footer>
      <small>&copy; 2021</small>
    </footer>
  </section>
);

//----------------------------------------------------------------Ex 0.3

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import MySection from './MySection';
import MyButton from './MyButton';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MySection>
    <MyButton>My Button Text</MyButton>
  </MySection>
);

//------------------------------------------------------------------Ex 0.4
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const array= ["First", "Second", "Third"];

const object= {
  first:1,
  second:2,
  third:3,
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <section>
    <h1>Array</h1>
    <ul>
      {array.map((i) =>(
        <li key={i}>
          <strong>{i}:</strong>
          {object[i]}
        </li>
      ))}
    </ul>
  </section>
);
//--------------------------------------------------------------------1.0

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import MyComponent from './MyComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyComponent/>
);
//-----------------------------------------------------------------------------Ex 1.1
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import MyComponent from './MyComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyComponent>
  </MyComponent>
);

//--------------------------------------------------------------------Ex1.2

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MyList from './MyList';
import MyButton from './MyButton';

const root = ReactDOM.createRoot(document.getElementById('root'));

const appState={
  text:"My Button",
  disabled: true ,
  item: ["First", "Second", "Third"],
};
function render(props){
  root.render(
    <main>
      <MyButton text={props.text} disabled={props.disabled}/>
      <MyList items={props.items}/>
    </main>
  );
}
render(appState);
setTimeout(() =>{
  appState.disabled=false;
  appState.items.push("Fourth");

  render(appState);
},1000);

//--------------------------------------------------------------------Ex1.3
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MyButton from './MyButton';

const root = ReactDOM.createRoot(document.getElementById('root'));

function render({second}){
  root.render(
    <main>
      <MyButton/>
      <MyButton text={second.text} disabled={second.disabled}/>
    </main>
  );
}

render({
  second:{
    text:"Second Button",
    disabled:true,
  },
});
//--------------------------------------------------------------------Ex2.1
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);



//--------------------------------------------------------------------Ex2.2
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

//--------------------------------------------------------------------Ex2.3
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);


//--------------------------------------------------------------------Ex3
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MyInput from './MyInput';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyInput
    
  />
);

//--------------------------------------------------------------------Ex4.1
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const element = (
  <div 
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:'15px',
    backgroundColor:"#d0f0c0", 
    border:'1px', 
    borderStyle:'solid', 
    borderColor:'green'}
    }>
    Green is the prime color of the world
    </div>
);

ReactDOM.render(element,document.getElementById('root'));

//--------------------------------------------------------------------Ex4.2
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import {Button} from 'antd';

function sayHello() {
  alert('You clicked me!');
}

const element = (
  <Button style={{ margin: "10px 10px"}} type="primary" onClick={sayHello}> Alert</Button>
);

ReactDOM.render(element,document.getElementById('root'));
*/
