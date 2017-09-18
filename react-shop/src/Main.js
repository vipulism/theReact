import React from 'react';
import { Switch, Route} from 'react-router-dom';

import App from './App';
import StorePicker from './StorePicker';


const Main = () => (

            <Switch>
                <Route exact  path='/' component={App} /> 
                <Route  exact  path='/storepicker' component={StorePicker} />
                <Route  exact  path='/storepicker/:id' component={StorePicker} />
            </Switch>
    )
 

export default Main;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// import List from './list';


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
         
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <List />
//       </div>
//     );
//   }
// }

// export default App;
