import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Appoinments from './components/Appoinments/Appoinments';
import DetailedService from './components/DetailedService/DetailedService';
import Home from './components/Home/Home';
import AppoinmentProvider from './Context/AppoinmentProvider';

function App() {
  return (
    <div className="text-lg text-gray-700">
     <AppoinmentProvider>
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
            <Appoinments/>
          </Route>
        </Switch>
      </BrowserRouter>
      
     </AppoinmentProvider>
    </div>
  );
}

export default App;
