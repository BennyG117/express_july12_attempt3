import logo from './logo.svg';
import './App.css';

import {Routes, Route, Link} from 'react-router-dom'
import Dashboard from './views/Dashboard'
import Edit from './views/Edit'
import New from './views/New'


function App() {
  return (
    <div className="App">
      <h1>Welcome to User Tracker!</h1>

      <Link to={"/"}>Dashboard</Link>
      |
      <Link to={"/new"}>Add a User</Link>

      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/new" element={<New/>}></Route>
        <Route path="/edit/:id" element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
