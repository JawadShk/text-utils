// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
// import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light')
  // const [alert, setAlert] = useState(null)

  // const showAlert = (message,type) =>{
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  // } 

  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
      // showAlert("Dark Mode Has Been Enabled", "success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      // showAlert("Light Mode Has Been Enabled", "success")
    }
  }
  return (
    <>
      <Navbar title= "TestUtils2" aboutText="aboutUs" mode={mode} toggleMode={toggleMode}/>
      {/* <Alert alert={alert}/> */}
      <div className="container my-5">
          <TextForm heading="Enter Text To Analyze" />
          {/* <About /> */}
      </div>
    </>
  );
}

export default App;
