import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages"
import Portfolio from "./pages/portfolio"
import ItemPage from "./components/Portfolio/ItemPage"
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import React, {useState} from 'react'
import ScrollToTop from "./components/ScrollToTop"

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Router>
        <ScrollToTop />
        <SideBar isOpen={isOpen} toggle={toggle} />
        <NavBar toggle={toggle}/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/portfolio" component={Portfolio} exact />
          <Route path="/portfolio/:id" component={ItemPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
