import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Appointments from './components/Appoinments/Appoinments';
import DetailedService from './components/DetailedService/DetailedService';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SignUp from './components/SignUp/SignUp';
import AppointmentProvider from './Context/AppointmentProvider';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="text-lg text-gray-700">
        <AppointmentProvider>
          <AuthProvider>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <PrivateRoute path="/services/:id">
                <DetailedService />
              </PrivateRoute>
              <PrivateRoute path="/appoinments">
                <Appointments />
              </PrivateRoute>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/signUp">
                <SignUp/>
              </Route>
            </Switch>
          </BrowserRouter>
          </AuthProvider>
        </AppointmentProvider>
      
    </div>
  );
}

export default App;
