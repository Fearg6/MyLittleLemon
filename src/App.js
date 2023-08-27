import "./App.css";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {
  return (
    <>
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
      <Main />
      <Footer />
    </>
  );
}

export default App;
