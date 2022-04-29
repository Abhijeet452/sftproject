import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import StudentLogin from './Components/Login/StudentLogin/StudentLogin';
import StudentSignUp from './Components/SignUp/StudentSignup/StudentSignUp';
import EmpLogin from './Components/Login/EmpLogin/EmpLogin';
import EmpSignUp from './Components/SignUp/EmpSignUp/EmpSignUp';
import StudentDashboard from './Components/StudentDashboard/StudentDashboard';
import FacultyDashboard from './Components/FacultyDashboard/FacultyDashboard';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/studentsignup">
          <StudentSignUp />
        </Route>
        <Route exact path="/empsignup">
          <EmpSignUp />
        </Route>
        <Route exact path="/studentlogin">
          <StudentLogin />
        </Route>
        <Route exact path="/emplogin">
          <EmpLogin />
        </Route>
        <Route exact path="/studashboard">
          <StudentDashboard />
        </Route>
        <Route exact path="/facultydashboard">
          <FacultyDashboard />
        </Route>
      </Switch>
    </Router>

  )
}

export default App;
