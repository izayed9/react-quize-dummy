import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import "../styles/App.css";
import { Layout } from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quize from "./pages/Quize";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/quize" component={Quize} />
            <Route exact path="/result" component={Result} />
          </Switch>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
