import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './index.css';


import Main from './Main';

const Start = () => (
    <div>
      <Main />
    </div>
  )


const Root = () =>{
    return (
        <BrowserRouter>
            <Start />
        </BrowserRouter>
    )

}

render(<Root />, document.getElementById('root'));



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import list from './list';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
