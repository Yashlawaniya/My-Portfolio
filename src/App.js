import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { themeContext } from './Context'; 
import { useContext } from 'react';
import Works from './Components/Works/Works';
  

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" id='top'
    style={{
      background : darkMode? 'black' : '',
      color : darkMode? 'white' : ''
    }}
    >
      <Navbar/>
      <Intro />
      <Services />
      <Works />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
