import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import ContactForm from './components/ContactForm/ContactForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div>


      <Router>
        <Switch>



          <Route exact path="/home">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>

          <Route exact path="/about">
            <Header></Header>
            <About></About>
            <Footer></Footer>
          </Route>

          <Route exact path="/contact">
            <Header></Header>
            <ContactForm></ContactForm>
            <Footer></Footer>
          </Route>

          <Route cxact path="/services">
            <Header></Header>
            <Services></Services>
            <Footer></Footer>
          </Route>

          <Route exact path="">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
