import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './Home'
import {About} from './About'
import {Contact} from './Contact'
import {NoMatch} from './NoMatch'
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';


function App() {
  return (
    <>
      <NavigationBar />
        <Layout>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={NoMatch} />
              </Switch>
            </Router>
          </Layout>        
    </>
  );
}

export default App;
