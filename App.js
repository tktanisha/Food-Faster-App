import React from 'react';
import ReactDom from 'react-dom';
import Header from './src/Header';
import Body from './src/Body';
import Footer from './src/Footer';
import './index.css';

const App=()=>{
    return(
      <div class="app">
       {/* header
           body
           footer  */}

           <Header/>
           <Body/>
           <Footer/>
      </div>
    );
}

const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>)