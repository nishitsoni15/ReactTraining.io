import { useLocation } from "react-router";


const RenderLogin = () => {
    const location = useLocation()
    console.log(location)
    let locateData = location.state.data
    return(
        <>
        <h1>Render Page</h1>
        <div> {locateData.email}</div>
        <div> {locateData.userName} </div>
        <div> {locateData.password} </div>
        
        </>
    )
}

export default RenderLogin;