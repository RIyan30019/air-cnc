import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import HotelDetails from './Components/HotelDetails/HotelDetails';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import PaymentSelection from './Components/PaymentSelection/PaymentSelection';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Review from './Components/Review/Review';
import SearchResults from './Components/SearchResults/SearchResults';
import WhoComing from './Components/WhoComing/WhoComing';

export const UserContext = createContext();

function App() {
  const [data, setData] = useState({})
  console.log(data.location)
  return (
    <UserContext.Provider value={[data, setData]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar location={false} />
            <Home />
          </Route>
          <Route path="/searchByLocation">
            <Navbar location={true} />
            <SearchResults/>
          </Route>
          <Route path="/hotelDetails/:id">
            <Navbar location={true} />
            <HotelDetails/>
          </Route>
          <PrivateRoute path="/review">
            <Navbar location={true} />
            <Review/>
          </PrivateRoute>
          <PrivateRoute path="/whoComing">
            <Navbar location={true} />
            <WhoComing/>
          </PrivateRoute>
          <PrivateRoute path="/payments">
            <Navbar location={true} />
            <PaymentSelection/>
          </PrivateRoute>
          <Route path="/login">
            <Navbar location={false} />
            <Login/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
