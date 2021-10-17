import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import DetailedService from './components/DetailedService/DetailedService';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="text-lg text-gray-700">
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
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
