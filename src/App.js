import TodoList from './components/TodoList'
import Header from './components/layout/Header'
import About from './components/pages/About'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div style={{
      fontFamily: 'Helvetica',
    }
    }>
      <Router>
        <Header />
        <Route exact path='/' component={TodoList} />
        <Route exact path='/about' component={About} />
      </Router>
    </div>
  );
}

export default App;