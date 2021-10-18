import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Appointments from './components/Appoinments/Appoinments';
import DetailedService from './components/DetailedService/DetailedService';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AppointmentProvider from './Context/AppointmentProvider';
import AuthProvider from './Context/AuthProvider';


function App() {
  return (
    <div className="text-lg text-gray-700">
      <AuthProvider>
        <AppointmentProvider>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/services/:id">
                <DetailedService />
              </Route>
              <Route path="/appoinments">
                <Appointments />
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
            </Switch>
          </BrowserRouter>
        </AppointmentProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
