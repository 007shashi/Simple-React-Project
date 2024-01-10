import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import Footer from "./Components/footer";

const Index = () => {
  
    return(
      <div>
        <App/>
      </div>
    );
  
} 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App/>
  </React.StrictMode>
);