import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

const App=()=>{
  var heading = "REACT LOGO";
  var arr = ['Home','Services','About'];
  var footer = "This is a sticky footer";
  return (

    <div className="container">
      <h1 className="alert-primary text-center p-3 rounded" >{heading}</h1>
      {/* <br></br> */}
      <br/>
      <Header navbar={arr} />
      <Main/>
      <Footer footer={footer}/>
    </div>

  );
}


export default App;










//function declaration style in JS.
//export default function App(){
//   return (<h1>Hello React</h1>);
// }


// React.createElement('h1',null,null,"Hello World")
// React.createElement('h2',null,null,"This is my first react app")

// React.createElement('div',null,
//   React.createElement('h1',null,null,"Hello"),
//   React.createElement('h2',null,null,"Inside H2"),
// "This is DIV")