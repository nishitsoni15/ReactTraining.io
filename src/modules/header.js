import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate ,Link} from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  
    const navigate = useNavigate();
    const Logout = (e) => {
        e.preventDefault();
        const removeItem = localStorage.removeItem('Auth');
        navigate('/');
    }
    return(
        <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0}} m={2}  pt={0} >
          <Link to="/About" style={{color:"white",textDecoration:"none"}}>About Us</Link>
          </Box>
          <Box sx={{ flexGrow: 0}} m={2}  pt={0}>
          <Link to="/dashboard" style={{color:"white",textDecoration:"none"}}>Dashboard</Link>
          </Box>
          <Box sx={{ flexGrow: 0}} m={2}  pt={0}>
          <Link to="/contact" style={{color:"white",textDecoration:"none"}}>Contact</Link>  
          </Box>
          <Box sx={{ flexGrow: 0}} m={2}  pt={0}>
          <Link to="/contact" style={{color:"white",textDecoration:"none"}} onClick={Logout}>LogOut</Link>  
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
    );
};

export default Header;