import './App.css';
import { Header, EnHeader }  from './Header';
import { Home, EnHome } from './Home';
import { Aboutme, EnAboutme } from './Aboutme';
import { Skills, EnSkills } from "./Skills"
import { Works, EnWorks } from "./Works"
import { Contact, EnContact } from "./Contact"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Home/>
          <Aboutme/>
          <Skills/>
          <Works/>
          <Contact />
        </Route>
        <Route path="/english">
          <EnHeader />  
          <EnHome/>
          <EnAboutme/>
          <EnSkills/>
          <EnWorks/>
          <EnContact />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
