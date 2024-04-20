import {
  Route,
  Routes,
  BrowserRouter
  
} from 'react-router-dom'

import HomePage from './pages/home_page';
import AdminUploadProduct from './pages/admin_upload_product';
import AdminLayout from './components/admin_page_layout';
import Carousel from './components/carousel';
import UserPage from './pages/user_page';
function App() {
  
  const images = [
    'https://via.placeholder.com/800x400/ff5733/fff',
    'https://via.placeholder.com/800x400/33ff57/fff',
    'https://via.placeholder.com/800x400/5733ff/fff',
  ];
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AdminLayout/>}>
          <Route path='' element={<HomePage/>}/>
          <Route path='admin_upload_product' element={<AdminUploadProduct/>}/>
        </Route>
        <Route path='/user' element={ <UserPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
