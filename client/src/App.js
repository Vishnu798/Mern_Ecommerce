import {
  Route,
  Routes,
  BrowserRouter
  
} from 'react-router-dom'

import HomePage from './pages/home_page';
import AdminUploadProduct from './pages/admin_upload_product';
import AdminLayout from './components/admin_page_layout';
import UserPage from './pages/user_page';
function App() {
  

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
