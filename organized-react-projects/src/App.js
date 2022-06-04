
import './App.css';

import { Link, Routes, Route, BrowserRouter as Router} from "react-router-dom"
import TaskList from './Components/TaskList'
import Hooks from './Components/Hooks';


function App() {
  

  return (
    
    <Router>
      <Routes>
        <Route path = "/tasks"element={<TaskList />}> </Route>
        <Route path = "/hooks"element={<Hooks />}> </Route>
      
      </Routes>
      </Router>
  );
}

export default App;
