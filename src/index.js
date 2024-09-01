import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

initTiledesk();

function initTiledesk() {
  window.tiledeskSettings = {
    // update with tiledesk new project id
    projectid: "66d3c0875bed5d0013ef5337"
};
(function(d, s, id) {
   var w=window; var d=document; var i=function(){i.c(arguments);};
   i.q=[]; i.c=function(args){i.q.push(args);}; w.Tiledesk=i;
   var js, fjs=d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) return;
   js=d.createElement(s);
   js.id=id; js.async=true; js.src="https://widget.tiledesk.com/v6/launch.js";
   fjs.parentNode.insertBefore(js, fjs);
}(document,'script','tiledesk-jssdk'));
}