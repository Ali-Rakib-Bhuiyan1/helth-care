import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from './compoments/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import AuthProvider from './contexts/AuthProvider';
import Login from './compoments/Login/Login';
import Services from './compoments/Services/Services';
import PrivateRoute from './PrivateRoute/PrivateRoute';

import NotFound from './compoments/NotFound/NotFound';
import Allservice from './compoments/Allservices/Allservice';
import Contrac from './compoments/contrac/Contrac';



function App() {
  return (
    <div className="App">

<AuthProvider>


<Router>
  {/* <Home></Home> */}
<Switch>

<Route exact path="/">
<Home></Home> 
 </Route>

 <Route path="/home">
 <Home></Home>
        </Route>

        <Route path="/services">
        <Services></Services>
        
        </Route>

        <Route path="/about">
        
        </Route>

        <Route path="/contact">
          <Contrac></Contrac>
        </Route>

        <PrivateRoute path="/service/:id">
          <Allservice ></Allservice>
        </PrivateRoute>


        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="*">
          <NotFound></NotFound>
         
        </Route>




</Switch>

      </Router>




</AuthProvider>

    </div>
  );
}

export default App;
