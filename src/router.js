import { Dashboard , AboutUsPage, Login,RenderLogin,ModalPage} from "./pages/index";
// import { MuiModal } from "../src/modules/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Router = (props) => {
    
    return(
        <BrowserRouter>
        <Routes>
        <Route exact path='/' element={< ModalPage />}/>
        <Route exact path='/dashboard' element={< Dashboard />}/>
        <Route exact path='/About' element={< AboutUsPage passingData={props.aboutUsData}/>}/>
       
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/render' element={<RenderLogin/>}/>
        {/* <Route exact path='/muiModal' element={<MuiModal/>}/> */}
        </Routes>
        </BrowserRouter>
    )

}

export default Router;