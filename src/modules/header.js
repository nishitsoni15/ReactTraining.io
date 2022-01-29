import { Navigation,UlHeader,LiHeader,AHeader } from "../components/styled";
import { Link ,useNavigate} from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    const Logout = (e) => {
        e.preventDefault();
        const removeItem = localStorage.removeItem('Auth');
        navigate('/');
    }
    return(
        <>
        <Navigation>
            <UlHeader>
                <LiHeader><Link to="/About">About Us</Link></LiHeader>
                <LiHeader><Link to="/dashboard">Dashboard</Link></LiHeader>
                <LiHeader><Link to="/contact">Contact</Link></LiHeader>
                <LiHeader><AHeader onClick={Logout}>Log Out</AHeader></LiHeader>
            </UlHeader>
        </Navigation>
        </>
    )
}

export default Header;