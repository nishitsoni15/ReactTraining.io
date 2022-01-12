import { Navigation,UlHeader,LiHeader,AHeader } from "../components/styled";
import { Link } from "react-router-dom";
const Header = () => {
    return(
        <>
        <Navigation>
            <UlHeader>
                <LiHeader><Link to="/About">About Us</Link></LiHeader>
                <LiHeader><AHeader>Dashboard</AHeader></LiHeader>
                <LiHeader><AHeader>Contact</AHeader></LiHeader>
            </UlHeader>
        </Navigation>
        </>
    )
}

export default Header;