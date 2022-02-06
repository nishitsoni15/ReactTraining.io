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
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';


const filter = createFilterOptions();

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const [value, setValue] = React.useState(null);
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
          <Box sx={{flexGrow: 0}} m={2} pt={0}>
          <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.title);
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            title: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
    option={}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
      renderOption={(props, option) => <li {...props}>{option.title}</li>}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Free solo with text demo" />
      )}
    />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    );
};

export default Header;