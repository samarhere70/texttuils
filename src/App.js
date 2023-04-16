import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import React,{useState} from 'react';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]= useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,

    })
    setTimeout(()=>{
      setAlert(null);

    },1500)
  }

  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert(" Dark mode has been enabled", "success");
      document.title='Dark Mode Enable';
      setInterval(()=>{
        document.title="Amezing App";

      },1000);

      setInterval(()=>{
        document.title="Download App";

      },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert(" Light mode has been enabled", "success");
      document.title='Light Mood Enable';
    }
  }

  return (
    <> 
    <Alert alert={alert}/>
    
    <Navbar title="Samar Here" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Textform showAlert={showAlert} heading="Enter Your Text" mode={mode}/>
    <About/>    
        
    </>
  );
}

export default App;
