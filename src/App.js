import logo from './logoBR.png';
import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { Fondo } from './components/Fondo/Fondo'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

function App() {
  
  return (

    <div className="App">
      <header className="App-header">
      
    <Fondo/>
      <NavBar />

      <ItemListContainer />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
      Bienvenido a Black#53Red <br/>el SpeackEasy Global !!!</p>
   
    </header>
    <Footer />.
   </div>
   
    
    )
}

export default App;
