import React from 'react';
// import Counter from './features/counter/Counter';
import './App.css';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";



const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <BannerPage></BannerPage>,
  // },

  {
    path: "/login",
    element: <LoginPage></LoginPage>
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>
  },
 

]);

function App() {
  return (
    <div className="App">
      {/* <Home>

      </Home> */}
      {/* <LoginPage></LoginPage> */}
      {/* <Banner></Banner> */}
      <RouterProvider router={router} />

    </div>
  )
};
export default App;

