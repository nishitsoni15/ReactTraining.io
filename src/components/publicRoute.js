// import {
//     Route,
//     Navigate
//   } from 'react-router-dom';
  
//   function PublicRoute({ children, isAuthenticated,   ...rest }) {
//     // const isAuth = true
//     // return isAuth? children:<Navigate to="/loginPrivate"/>     
//     return (
//       <Route
//         {...rest}
//         render={
//           ({ location }) => (
//             !isAuthenticated ? (
//               children
//             ) : (
//               <Navigate
//                 to={{
//                   pathname: '/ModalPage',
//                   state: { from: location }
//                 }}
//               />
//             ))
//         }
//       />
//     );
//   }
  
//   export default PublicRoute;