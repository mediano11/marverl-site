import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import App_ref from "./components/app/App_ref";
import App_propsChidlren from "./components/app/App_propsChildren";
import MarvelService from "./services/MarvelService";
import './style/style.scss';


// const marvelService = new MarvelService();


ReactDOM.createRoot(document.getElementById("root"))
.render(
  // <React.StrictMode>
    <App />
    // {/* <App_ref /> */}
    // {/* <App_propsChidlren/> */}
  // {/* </React.StrictMode> */}
);

