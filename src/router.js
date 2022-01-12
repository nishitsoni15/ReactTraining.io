import { Dashboard , AboutUsPage, Login,RenderLogin} from "./pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Router = (props) => {
    
    return(
        <BrowserRouter>
        <Routes>
        <Route exact path='/' element={< Dashboard />}/>
        <Route exact path='/About' element={< AboutUsPage passingData={props.aboutUsData}/>}/>
        {/* <Route exact path='/Contact' element={< Contact />}/> */}
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/render' element={<RenderLogin/>}/>
        </Routes>
        </BrowserRouter>
    )

}

export default Router;