
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointmnet/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
   <Router>
     <Switch>
       <Route exact path='/'>
         <Home></Home>
       </Route>
       <Route path='/home'>
         <Home></Home>
       </Route>
       <Route path='/appointment'>
        <Appointment></Appointment>
       </Route>
       <Route path='/login'>
        <Login></Login>
       </Route> 
       <Route path='/register'>
        <Register></Register>
       </Route>
     </Switch>
   </Router>
    </div>
  );
}

export default App;
