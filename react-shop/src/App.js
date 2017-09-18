import React from 'react';
import { Link} from 'react-router-dom';


import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

const App = () => (
      <div className="catch">
      <div className="manu">
        <Header tagg="Yo yo" />
        <Order />
        <Inventory />

        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/storepicker'>StorePicker</Link></li>
      </ul>


      </div>
      </div>
    )
 

export default App;

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
