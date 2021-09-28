import "./App.css"
import Header from "./Header";
import Home from "./Home"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './Search'
import SearchHeader from "./SearchHeader";


function App() {

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Header />
          <Home />    
        </Route>
        <Route strict path='/q'>
          <SearchHeader />        
          <Search />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
