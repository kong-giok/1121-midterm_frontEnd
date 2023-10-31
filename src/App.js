import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "./global.css";
import Homepage from './pages/Homepage';
import NodeBlogs from './pages/nodeBlogs';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/blogs' element={<NodeBlogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
