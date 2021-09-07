import React from "react";
import logo from "./logoBR.png";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Fondo } from "./components/Fondo/Fondo";
import { Footer } from "../src/components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "../src/components/ItemDetailContainer/ItemDetailContainer";
//import { ItemDetail } from'../src/components/ItemDetail/ItemDetail'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SubMenu } from '../src/components/SubMenu/SubMenu'
//import ListCategory from '../src/components/Category/Category'

//Views
import { Home } from "../src/pages/Home";
import { Contacto } from "../src/pages/Contacto";
import { About } from "../src/pages/About";
import { Productos } from "../src/pages/Productos";
//import { cartProvider } from ''

function App() {
  return (
    // <CartProvider>
    <Router>
      <div className="App">
        <header className="App-header">
          <Fondo>
            <NavBar />
            <SubMenu />
            <Switch>
              <Route exact path="/" component={Home}>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Bienvenido a Black#53Red <br />
                  el Speak Easy Global !!!
                </p>
              </Route>

              <Route exact path="/Productos" component={Productos}>
                <ItemListContainer />
              </Route>
              <Route path="/category/:categoryId" component={ItemListContainer}></Route>
              <Route path="/item/:id" component={ItemDetailContainer}></Route>
              <Route exact path="/About" component={About}></Route>
              <Route exact path="/Contacto" component={Contacto}></Route>
            </Switch>
          </Fondo>
        </header>

        <Footer />
      </div>
    </Router>
    //</cartProvider >
  );
}

export default App;
