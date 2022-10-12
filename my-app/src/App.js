// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title= "TestUtils2" aboutText="aboutUs"/>
      <div className="container my-5">
          <TextForm heading="Enter Text To Analyze" />
      </div>
    </>
  );
}

export default App;
