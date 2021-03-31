import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import App from "./Slotapp/SlotApp"; // the slotapp
// import ToDoApp from "./ToDoApp/ToDoApp"; // the ToDo app
// import IncreDecreApp from "./IncreDecrementAPP/IncreDecreApp" // incrementdecrement app;
// import NetflixApp from "./Netflix/NetflixApp";
// import App from "./contextApi/App";
// import App from "./useEffect/UseEffect";
// import App from "./AxiosApi/App";
// import App from "./R0uters/App";
import App from "./Project1/App";
import { BrowserRouter } from "react-router-dom";




ReactDOM.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
  , document.getElementById('root')
);

