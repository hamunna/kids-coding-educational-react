import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import ContactForm from './components/ContactForm/ContactForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <Router>

      {/* Default Header Section */}
      <Header></Header>
      <Switch>

        {/* Root Home Page */}
        <Route exact path="/">
          <Home></Home>
        </Route>

        {/* Exact Home Page */}
        <Route exact path="/home">
          <Home></Home>
        </Route>


        {/* About Us Page */}
        <Route exact path="/about">
          <About></About>
        </Route>

        {/* Contact Us Page */}
        <Route exact path="/contact">
          <ContactForm></ContactForm>
        </Route>

        {/* Services Page */}
        <Route cxact path="/services">
          <Services></Services>
        </Route>

        {/* 404 Not Found Page */}
        <Route path="*">
          <NotFound></NotFound>
        </Route>

      </Switch>

      {/* Default Footer Section */}
      <Footer></Footer>
    </Router>
  );
}

export default App;
