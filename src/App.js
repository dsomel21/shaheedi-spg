import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ChapterInfoScreen from './screens/ChapterInfoScreen';
import ChapterIndexScreen from './screens/ChapterIndexScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Switch>
            <Route exact path="/chapters">
              <ChapterIndexScreen />
            </Route>
            <Route exact path="/chapters/:id">
              <ChapterInfoScreen />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
