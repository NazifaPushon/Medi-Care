import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Appointments from './components/Appoinments/Appoinments';
import DetailedService from './components/DetailedService/DetailedService';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrimaryCare from './components/PrimaryCare/PrimaryCare';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SignUp from './components/SignUp/SignUp';
import AppointmentProvider from './Context/AppointmentProvider';
import AuthProvider from './Context/AuthProvider';


//All routes setup here
// AuthProvider and Appoinment Provider is added here 
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
              <PrivateRoute path="/services/:id">
                <DetailedService />
              </PrivateRoute>
              <PrivateRoute path="/appoinments">
                <Appointments />
              </PrivateRoute>
              <PrivateRoute path="/care">
                <PrimaryCare />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signUp">
                <SignUp />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            <Footer/>
          </BrowserRouter>
        </AppointmentProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
