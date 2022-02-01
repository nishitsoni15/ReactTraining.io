import {
    Navigate
  } from 'react-router-dom';

  
  function PrivateRoute({ children }) {
    let auth = localStorage.getItem('Auth'); 
    console.log(auth)
    return auth ? children : <Navigate to="/loginPrivate"/>
  }
  
  export default PrivateRoute;