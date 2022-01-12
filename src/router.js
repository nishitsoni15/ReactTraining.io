import { Dashboard , AboutUsPage, Login,RenderLogin} from "./pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Router = (props) => {
    
    return(
        <BrowserRouter>
        <Routes>
        {/* <Route exact path='/' element={< Dashboard />}></Route>
        <Route exact path='/About' element={< AboutUsPage passingData={props.aboutUsData}/>}></Route>
        <Route exact path='/Contact' element={< Contact />}></Route> */}
        <Route exact path='/' element={<Login/>}></Route>
        <Route exact path='/render' element={<RenderLogin/>}></Route>
        </Routes>
        </BrowserRouter>
    )

}

export default Router;