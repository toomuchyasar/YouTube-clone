import  {BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Sidebar } from './Components/Sidebar';
import PageContainer from './Containers/PageContainer';
import { Detail } from './Pages/Detail';
import { Home } from './Pages/Home';
import { Users } from './Pages/Users';

function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
      <PageContainer>
    <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="videos/:id" element={<Detail />} />
        <Route path="search/: keyword" element={<Users />} />
      </Routes>
        </PageContainer>
        </BrowserRouter>
  
    </div>
  );
}

export default App;
