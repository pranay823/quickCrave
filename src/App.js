
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import HomePage from './components/HomePage';
import Login from './components/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import { Provider } from 'react-redux';
import appStore from './Utils/appStore';
import RestroMenu from './components/RestroMenu';



const AppLayout=()=>{
  return(
  <div className='app'>
    <Header />
    <Provider store={appStore} >
    <Outlet />
    </Provider>
  </div>
  )}

const router = createBrowserRouter([
  {
   path : '/',
   element : <AppLayout />,
   children : [
    {
      path : '/',
      element : <Login />
    },
    {
      path:'/homepage',
      element : <HomePage />
    },
    {
      path:'/restaurants/:resid',
      element : <RestroMenu />
    }
   ]
  }
])

function App() {
  return (
    <div className="App">
   <RouterProvider router={router} />
   <ToastContainer 
   position="top-right"
   autoClose={3000}
   hideProgressBar={false}
   newestOnTop={false}
   closeOnClick
   rtl={false}
   pauseOnFocusLoss
   draggable
   pauseOnHover
   theme="light"
   />
    </div>
  );
}

export default App;
