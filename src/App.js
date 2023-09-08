import "./App.css";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Menu from "./components/Menu";
import About from "./components/About";
import Footer from "./components/Footer";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Helmet>
        <meta property="og:title" content="Little Lemon" />
        <meta
          property="og:description"
          content="Little Lemon is a resturant."
        />
        <meta property="og:image" content="little_lemon_logo.png" />
        <meta property="og:url" content="https://little-lemon.com" />
      </Helmet>
      <Header />
      <Nav />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/booking.html" exact component={Main} />
        <Route path="/menu.html" exact component={Menu} />
        <Route path="/reservations.html" exact component={Main} />
        <Route path="/about.html" exact component={About} />
        <Route path="/confirmed-booking.html" exact component={ConfirmedBooking} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
