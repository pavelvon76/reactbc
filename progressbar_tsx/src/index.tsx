import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { iProps, ProgressUI } from './ProgressUI';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// event definition

// díky STX jsx a TS to lze rovnou takto
const myProps: iProps = {inPcnt:46};

// alternativa jen pro TS root.render(React.createElement(progressUI,myProps)); 


// standard REACT
root.render(
//  <React.StrictMode>
    <ProgressUI 
      {...myProps}  
    />
//  </React.StrictMode>
);


// export const InitControls = function () {
//   (ReactDOM as any).render(
//     React.createElement(ProgressUI,myProps),
//     document.querySelector('#controlAddIn')
//   )
// }

// export const ProgressReact = () => {
//   (window as any).InitControls = function () {
//     (ReactDOM as any).render(
//       React.createElement(ProgressUI,myProps),
//       document.getElementById('controlAddIn')
//     )
//   }
  
// }



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
