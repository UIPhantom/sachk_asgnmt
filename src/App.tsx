import './App.css';
import Banner from './Componenets/Banner';
import InfoPage from './Componenets/InfoPage';
import LastPart from './Componenets/LastPart';
import Navbar from './Componenets/Navbar';
function App() {
  
  return (
    <div className="App">
      <Banner />
      <Navbar />
      
      <InfoPage />
      
      <LastPart/>
    </div>
  );
}

export default App;
