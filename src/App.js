import React  from 'react'
import logo from './logoBR.png';
import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { Fondo } from './components/Fondo/Fondo'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemCount} from '../src/components/ItemCount/ItemCount'
//import { ItemDetailContainer } from '../src/components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//import ListCategory from '../src/components/Category/Category'
//import People from '../src/components/People/People'

//Views
import { Home } from '../src/pages/Home'
import { Contacto } from '../src/pages/Contacto'
import { About } from '../src/pages/About'
import { Productos } from '../src/pages/Productos'


function App() {

   return (
    <Router>
     <div className="App">

      <header className="App-header">
          <Fondo/>
          <NavBar />

        <Switch>
          <Route exact path='/' component={Home}>
             
                <img src={logo} className="App-logo" alt="logo" />
                <p>Bienvenido a Black#53Red <br/>el Speak Easy Global !!!</p></Route>  
                  
          <Route exact path='/Productos' component={ Productos }>
           
              <ItemListContainer />
              
              <ItemCount />
          </Route>
          <Route path='/category/:categoryId'></Route>
          <Route path='/item/:id'></Route>
          <Route exact path='/About' component={ About }></Route>
          <Route exact path='/Contacto' component={ Contacto }></Route>
    
        </Switch>  
      </header>
      <Footer />

    </div>
  </Router> 
  )
}

export default App;
