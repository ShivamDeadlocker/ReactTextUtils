import './App.css';
import { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
 
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=> {
    setAlert({

      msg: message,
      type: type

    })
    setTimeout(()=>{setAlert(null)},2000)
  }

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#1E3A5F'
      showAlert("Dark mode enabled!!!","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled!!!","success")
    }

  }
  return (
<>

<Navbar title="ShiamProTextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
<div className="container">
  <Alert alert={alert}/>
<TextForm heading="Enter your text below to analyze" mode={mode} showAlert={showAlert}/> 
{/* <About/> */}
</div>

{/* <Navbar/> */}

</>
 
  );
}

export default App;
