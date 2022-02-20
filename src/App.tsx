import { Divider } from '@chakra-ui/react';
import './App.css';
import Banner from './Componenets/Banner';
import Navbar from './Componenets/Navbar';
import SectionInfo from './Componenets/SectionInfo';

function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <Divider orientation='vertical' />
      <SectionInfo />
    </div>
  );
}

export default App;
