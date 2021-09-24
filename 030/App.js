import './App.css';
import AddNewTask from './AddNewTask';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home';
import NewTaskHeader from './NewTaskHeader'
import Pomodoro from './Pomodoro';
import PomodoroHeader from './PomodoroHeader'
import TaskDetails from './TaskDetails';
import PomodoroInside from './PomodoroInside';
import LastPomodoros from './LastPomodoros';

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
        <Route path='/Pomodoro'>
          <PomodoroHeader />
          <Pomodoro />
        </Route>
        <Route path='/LastPomodoros'>
          <PomodoroHeader />
          <LastPomodoros />
        </Route>
        <Route path='/toDos/:id'>
          <PomodoroHeader />
          <TaskDetails />
          <PomodoroInside />
        </Route>
      </Switch>
    </div>
          
    </Router>
  );
}

export default App;
