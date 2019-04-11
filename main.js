// import React from'react';
// import ReactDOM from 'react-dom';


// ReactDOM.render(<h1>Hello world</h1>, document,getElementById('app'));
import React from 'react';
import { render } from 'react-dom'; 
import { Header } from './src/app/components/Header'
class MyFirstComponent extends React.Component{
    render(){
        return(
            <div>
                <Header />
          </div>
        );
    }
}

render(<MyFirstComponent/>, window.document.getElementById("myfirstcomponent"));
