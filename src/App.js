import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Appointments from './components/Appoinments/Appoinments';
import DetailedService from './components/DetailedService/DetailedService';
import Home from './components/Home/Home';
import AppointmentProvider from './Context/AppointmentProvider';


function App() {
  return (
    <div className="text-lg text-gray-700">
     <AppointmentProvider>
        <BrowserRouter>
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route  path="/home">
          <Home/>
          </Route>
          <Route  path="/services/:id">
            <DetailedService/>
          </Route>
          <Route  path="/appoinments">
            <Appointments/>
          </Route>
        </Switch>
      </BrowserRouter>
      
     </AppointmentProvider>
    </div>
  );
}

export default App;
