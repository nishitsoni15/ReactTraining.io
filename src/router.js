import { Dashboard , AboutUsPage, Login,RenderLogin,WelcomePage,Contact,LoginPrivatePage, RegisterFormPage} from "./pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from './components/index';



const Router = (props) => {
    
    return(
        <BrowserRouter>
        <Routes>
        <Route exact path='/' element={< RegisterFormPage />}/>
        <Route exact path='/loginPrivate' element={< LoginPrivatePage />}/>
        <Route exact path='/welcomePage' element={< PrivateRoute >< WelcomePage /></ PrivateRoute >}/>
        <Route exact path='/dashboard' element={< Dashboard />}/>
        <Route exact path='/About' element={< AboutUsPage passingData={props.aboutUsData}/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/render' element={<RenderLogin/>}/>
        </Routes>
        </BrowserRouter>
    )

}

export default Router;