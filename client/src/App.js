import {
  Route,
  Routes,
  BrowserRouter
  
} from 'react-router-dom'

import HomePage from './pages/home_page';
import AdminUploadProduct from './pages/admin_upload_product';
import AdminLayout from './components/admin_page_layout';
function App() {
  
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AdminLayout/>}>
          <Route path='' element={<HomePage/>}/>
          <Route path='admin_upload_product' element={<AdminUploadProduct/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
