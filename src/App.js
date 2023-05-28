import logo from './logo.svg';
import './App.css';
import { DndProvider } from 'react-dnd';
import Homepage from './pages/Homepage';
import {HTML5Backend as Backend} from 'react-dnd-html5-backend';
import Header from './components/Header';
function App() {
  return (
    <>
    <DndProvider backend={Backend}>
      <Header/>
      <Homepage/>
    </DndProvider>
    
    </>
  );
}

export default App;
