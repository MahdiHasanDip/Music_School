import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './Components/Not-Found/NotFound';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Contact from './Components/ContactUs/Contact';
import Services from './Components/Services/Services';
import About from './Components/About/About';



function App() {
  return (
    <div className="App">
     <Router>
{/* Header  */}
<Header> </Header>


<Switch>
  <Route exact path="/">
<Home></Home>
  </Route>

  {/* HOME  */}
  <Route path="/home">
<Home></Home>
  </Route>

  {/* Services  */}
  <Route path="/services">
<Services></Services>
  </Route>

  {/* About  */}
  <Route path="/about">
<About></About>
  </Route>

  {/* Contact  */}
  <Route path="/Contact">
<Contact></Contact>
  </Route>

  {/* Not Found  */}
  <Route path="*">
<NotFound></NotFound>
  </Route>
</Switch>

<Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
