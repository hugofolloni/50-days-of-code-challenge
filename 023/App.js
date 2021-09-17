import './App.css';
import AddNewTask from './AddNewTask';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home';
import NewTaskHeader from './NewTaskHeader'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Header />
          <Home />
        </Route>
        <Route path='/newTask'>
          <NewTaskHeader />
          <AddNewTask />
        </Route>
      </Switch>
    </div>
          
    </Router>
  );
}

export default App;
