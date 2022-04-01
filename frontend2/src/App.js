import Login from './components/Login';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Feed from './components/Feed';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MyProjects from './components/MyProjects';
import MyBlogs from './components/MyBlogs';
import Project from './components/Project';
import Blog from './components/Blog';
import NewProject from './components/NewProject';
import NewBLog from './components/NewBlog';
import EditProject from './components/EditProject';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" exact={true}>
          <div className="columns is-gapless" style={{ width: "100%", height: "100vh" }}>
            <div className="column is-one-fifth">
              <Navbar />
            </div>
            <div className="column has-background-white-ter" style={{ overflowY: "auto", overflowX: "hidden" }}>
              <Dashboard />
            </div>
          </div>
        </Route>
        <Route path="/" exact={true}>
          <div className="columns is-gapless" style={{ width: "100%", height: "100vh" }}>
            <div className="column is-one-fifth">
              <Navbar />
            </div>
            <div className="column has-background-white-ter" style={{ overflowY: "auto", overflowX: "hidden" }}>
              <Feed />
            </div>
          </div>
        </Route>
        <Route path="/projects" exact={true}>
          <div className="columns is-gapless" style={{ width: "100%", height: "100vh" }}>
            <div className="column is-one-fifth">
              <Navbar />
            </div>
            <div className="column has-background-white-ter" style={{ overflowY: "auto", overflowX: "hidden" }}>
              <MyProjects />
            </div>
          </div>
        </Route>
        <Route path="/project/:id" exact={true}>
          <div className="columns is-gapless" style={{ width: "100%", height: "100vh" }}>
            <div className="column is-one-fifth">
              <Navbar />
            </div>
            <div className="column has-background-white-ter" style={{ overflowY: "auto", overflowX: "hidden" }}>
              <Project />
            </div>
          </div>
        </Route>
        <Route path="/blogs" exact={true}>
          <div className="columns is-gapless" style={{ width: "100%", height: "100vh" }}>
            <div className="column is-one-fifth">
              <Navbar />
            </div>
            <div className="column has-background-white-ter" style={{ overflowY: "auto", overflowX: "hidden" }}>
              <MyBlogs />
            </div>
          </div>
        </Route>
        <Route path="/blog/:id" exact={true}>
          <div className="columns is-gapless" style={{ width: "100%", height: "100vh" }}>
            <div className="column is-one-fifth">
              <Navbar />
            </div>
            <div className="column has-background-white-ter" style={{ overflowY: "auto", overflowX: "hidden" }}>
              <Blog />
            </div>
          </div>
        </Route>
        <Route path="/newproject" exact={true}>
          <div className="columns is-gapless" style={{ width: "100%", height: "100vh" }}>
            <div className="column is-one-fifth">
              <Navbar />
            </div>
            <div className="column has-background-white-ter" style={{ overflowY: "auto", overflowX: "hidden" }}>
              <NewProject />
            </div>
          </div>
        </Route>
        <Route path="/newblog" exact={true}>
          <div className="columns is-gapless" style={{ width: "100%", height: "100vh" }}>
            <div className="column is-one-fifth">
              <Navbar />
            </div>
            <div className="column has-background-white-ter" style={{ overflowY: "auto", overflowX: "hidden" }}>
              <NewBLog />
            </div>
          </div>
        </Route>

        <Route path="/editproject" exact={true}>
          <div className="columns is-gapless" style={{ width: "100%", height: "100vh" }}>
            <div className="column is-one-fifth">
              <Navbar />
            </div>
            <div className="column has-background-white-ter" style={{ overflowY: "auto", overflowX: "hidden" }}>
              <EditProject />
            </div>
          </div>
        </Route>

        <Route path="/admin" exact={true}>
          <div className="columns is-gapless" style={{ width: "100%", height: "100vh" }}>
            <div className="column is-one-fifth">
              <Navbar />
            </div>
            <div className="column has-background-white-ter" style={{ overflowY: "auto", overflowX: "hidden" }}>
              <Feed />
            </div>
          </div>
        </Route>
        <Route path="/login" exact={true}>
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
